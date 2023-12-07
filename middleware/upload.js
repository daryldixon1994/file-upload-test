const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: "mongodb+srv://gomycode:gomycode2023@cluster0.xu8jhiq.mongodb.net/?retryWrites=true&w=majority",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
      const match = ["image/png", "image/jpeg"];
      console.log("mimtype-test", match.indexOf(file.mimetype) === -1);
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-any-name-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-any-name-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
