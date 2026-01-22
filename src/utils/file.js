import { cloudinary } from "../config/cloudinary.js";

const CLOUDINARY_FOLDER = "nodejsDec2026";

async function uploadFile(file) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: CLOUDINARY_FOLDER },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    ).end(file.buffer);
  });
}

export default uploadFile;
