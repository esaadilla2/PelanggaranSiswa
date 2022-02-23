const express = require(`express`)
const app = express()

app.use(express.json())

let siswaController = require("../controllers/siswaController")

//end point untuk data siswa
app.get("/", siswaController.getDataSiswa)

//end point untuk add siswa
app.post("/", siswaController.addDataSiswa)

//end point untuk edit siswa
app.put("/:id_siswa", siswaController.editDataSiswa)

//end point untuk delete siswa
app.delete("/:id_siswa", siswaController.deleteDataSiswa)

module.exports = app