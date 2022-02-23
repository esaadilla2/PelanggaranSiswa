const express = require(`express`)
const app = express()

app.use(express.json())

let pelanggaranController = require("../controllers/pelanggaranController")

//end point untuk data siswa
app.get("/", pelanggaranController.getPelanggaran)

//end point untuk add siswa
app.post("/", pelanggaranController.addPelanggaran)

//end point untuk edit siswa
app.put("/:id_pelanggaran", pelanggaranController.updatePelanggaran)

//end point untuk delete siswa
app.delete("/:id_pelanggaran", pelanggaranController.deletePelanggaran)

module.exports = app