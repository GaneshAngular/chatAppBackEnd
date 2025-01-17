const multer=require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary  = require('./cloudinary.service');

const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params: {
      folder: "profiles",
      format: async (req, file) => "png",
      public_id: (req, file) => file.originalname,
  }
})

const upload=multer({storage:storage});

module.exports=upload;