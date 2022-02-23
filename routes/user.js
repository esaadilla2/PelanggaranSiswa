const express = require(`express`)
const app = express()

app.use(express.json())

let userController = require("../controllers/userController")

//end point untuk data siswa
app.get("/", userController.getDataUser)

//end point untuk add siswa
app.post("/", userController.addDataUser)

//end point untuk edit siswa
app.put("/:id_user", userController.editDataUser)

//end point untuk delete siswa
app.delete("/:id_user", userController.deleteDataUser)

module.exports = app