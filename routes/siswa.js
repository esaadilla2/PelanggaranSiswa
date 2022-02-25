const express = require(`express`)
const app = express()

app.use(express.json())

let siswaController = require("../controllers/siswaController")

//memanggil middleware
let tesmidware = require("../middleware/tesMidware")
let authorize = require("../middleware/authorization")
let uploadImg = require("../middleware/uploadImg")

//end point untuk data siswa
app.get("/", 
    [tesmidware.midware1, tesmidware.midware2, authorize.authorization], 
    siswaController.getDataSiswa
)

//end point untuk add siswa
app.post("/", 
    [uploadImg.upload.single(`image`), authorize.authorization], 
    siswaController.addDataSiswa)

//end point untuk edit siswa
app.put("/:id_siswa", siswaController.editDataSiswa)

//end point untuk delete siswa
app.delete("/:id_siswa", siswaController.deleteDataSiswa)

module.exports = app