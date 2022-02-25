const multer = require("multer")
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
    destination: (request, filename, callback) => {
        callback(null, "./image")
        //ini cofig untuk menentukan folder penyimpanan file
    },
    filename: (request, file, callback) => {
        callback(null, `image-${Date.now()}${path.extname(file.originalname)}`)
        //ini config untuk menentukan nama file yg diupload
    }
})

exports.upload = multer({storage: storage})