import multer from "multer";

// Set up storage using Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // specify the upload directory
  },
  filename: function (req, file, cb) {
    // specify the filename (you can modify this as needed)
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create Multer instance with the storage configuration
const upload = multer({ storage: storage });

export default upload;
