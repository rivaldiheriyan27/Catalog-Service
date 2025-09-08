const multer = require("multer");
const path = require("path");

// Tentukan storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images"); // simpan di folder public/images
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Filter hanya boleh file gambar
const fileFilter = (req, file, cb) => {
  cb(null, true);
};

// Inisialisasi upload
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
