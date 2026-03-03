import { PutObjectCommand } from "@aws-sdk/client-s3"
import { s3 } from "../config/s3.js"
import path from 'path'
import fs from 'fs'

export const uploadToS3 = async (filePath, mimetype) => {
  try {
    const key = `uploads/users/${path.basename(filePath)}`;
    const fileReadStream = fs.createReadStream(filePath);
  
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      Body: fileReadStream,
      ContentType: mimetype,
    })
  
    await s3.send(command)
  
    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
  } catch (err) {
    throw new Error('file upload failed')
  } finally {
    fs.unlink(filePath, (err) => {
      if(err) console.error('File deletion failed:', err);
    })
  }
}
