const express = require(`express`)
const cors = require(`cors`)
const app = express()
app.use(express.json())
const userController =
require(`../controller/user.controller`)
const {auth} = require (`../auth/auth`)

app.get("/", auth, userController.getAllUser)
app.post("/add", userController.addUser)
app.post("/login", userController.login)
app.put("/:id", auth, userController.updateUser)
app.post("/find", auth, userController.findUser)
app.get("/:id", userController.findUserbyId)
app.delete("/:id", auth, userController.deleteUser)
module.exports = app