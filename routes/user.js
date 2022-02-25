const express = require(`express`)
const app = express()

app.use(express.json())

let userController = require("../controllers/userController")

//end point untuk data user
app.get("/", userController.getDataUser)

//end point untuk add user
app.post("/", userController.addDataUser)

//end point untuk edit user
app.put("/:id_user", userController.editDataUser)

//end point untuk delete user
app.delete("/:id_user", userController.deleteDataUser)

//autentikasi
app.post("/auth", userController.authentication)

module.exports = app