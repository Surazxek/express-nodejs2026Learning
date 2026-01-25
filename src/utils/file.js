import { cloudinary } from "../config/cloudinary.js";

const CLOUDINARY_FOLDER = "nodejsDec2026";

async function uploadFile(files) {
  const uploadResults = [];

  for (const file of files) {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: CLOUDINARY_FOLDER },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(file.buffer);
    });

    
    uploadResults.push(result);
  }

  return uploadResults;
}

export default uploadFile;
