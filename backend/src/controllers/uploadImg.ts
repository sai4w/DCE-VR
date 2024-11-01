import cloudinary from "../utils/cloudinary";

export const uploadImg = (
  file: Express.Multer.File,
): Promise<{ url: string }> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve({ url: result.url });
      }
    });
  });
};
