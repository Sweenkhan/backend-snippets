import multer from 'multer';

// Configure Multer for local storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define the directory to store uploaded images locally
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Define file naming convention
  }
});

const upload = multer({ storage: storage });

export default upload;
