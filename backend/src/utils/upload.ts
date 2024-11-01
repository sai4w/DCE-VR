import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({
    filename: function (req: Express.Request, file, cb) {
      cb(null, file.originalname);
    },
  }),
});
