import multer from "multer";
import { ACCEPT_FILE_TYPES } from "../constants.js";

const storage = multer.diskStorage({
    destination: '../../uploads',
    filename: (req, file, cb) => {
        cb(null, `${crypto.randomUUID()}-${file.originalname}`)
    } 
});

const fileFilter = (req, file, cb) => {
    if(!ACCEPT_FILE_TYPES.includes(file.mimetype)){
        return cb(new Error('Incorrect file type'), false);
    }
    cb(null, true);
}

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter
});

export default upload;
