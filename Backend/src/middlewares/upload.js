const multer = require("multer");
const path = require("path");

// ✅ Generic uploader — pass folder name when calling
const createUploader = (folderName) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join("uploads", folderName));
    },
    filename: (req, file, cb) => {
      const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueName + path.extname(file.originalname));
    },
  });

  return multer({ storage });
};

module.exports = createUploader;
