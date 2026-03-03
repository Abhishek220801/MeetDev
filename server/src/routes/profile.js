import express from "express"
import { validateProfileEditData } from "../utils/validation.js"
import bcrypt from "bcrypt"
import validator from "validator"
import { uploadToS3 } from "../utils/uploadToS3.js"

const profileRouter = express.Router()

import { userAuth } from "../middlewares/auth.js"
import upload from "../middlewares/upload.js"
import { ACCEPT_FILE_TYPES, MAX_FILE_SIZE } from "../constants.js"

profileRouter.get("/", userAuth, async (req, res) => {
  try {
    const user = req.user
    res.send(user)
  } catch (err) {
    res.status(400).send("ERROR : " + err.message)
  }
})

profileRouter.patch(
  "/edit",
  upload.single('photo'),
  userAuth,
  async (req, res) => {
    try {
      if (!validateProfileEditData(req)) {
        return res.status(400).json({ message: "Invalid Edit Request" })
      }

      const loggedInUser = req.user
      const updates = req.body || {}

      if (Object.keys(updates).length === 0 && !req.file) {
        return res.status(400).json({ message: "No fields provided" })
      }

      // Parse skills
      if ("skills" in updates) {
        if (typeof updates.skills === "string") {
          try {
            const parsed = JSON.parse(updates.skills)
            updates.skills = Array.isArray(parsed) ? parsed : []
          } catch (e) {
            updates.skills = []
          }
        }
        if (Array.isArray(updates.skills)) {
          updates.skills = updates.skills
            .filter(
              (skill) =>
                skill && typeof skill === "string" && skill.trim() !== ""
            )
            .map((skill) => skill.trim())
        } else {
          updates.skills = []
        }
      }

      // Update fields
      Object.keys(updates).forEach((key) => {
        if (key === "photoUrl") return // Skip photoUrl from body
        loggedInUser[key] = updates[key]
      })

      // Handle file upload
      console.log(req.file.path);
      if (req.file.path) {
        const photoPath = req.file.path;
        const s3Url = await uploadToS3(photoPath, req.file.mimetype);
        const oldS3Url = loggedInUser.photoUrl
        loggedInUser.photoUrl = s3Url;
        // now delete the old url once user uploads new (PENDING)
      }

      const savedUser = await loggedInUser.save()

      return res.json({
        message: `${savedUser.firstName}, your profile was updated successfully!`,
        data: savedUser,
      })
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Edit request failed",
      })
    }
  }
)

profileRouter.patch("/password", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user
    const { currentPassword, newPassword } = req.body
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      loggedInUser.password
    )
    if (!isPasswordValid)
      throw new Error("Please enter correct current password")
    if (!validator.isStrongPassword(newPassword))
      throw new Error("Please enter a strong password")
    loggedInUser.password = newPassword
    await loggedInUser.save()
    return res.json({
      message: "Password updated successfully",
    })
  } catch (err) {
    res.status(400).send("ERROR : " + err.message)
  }
})

export default profileRouter
