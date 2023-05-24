const express = require(`express`);
const app = express();
app.use(express.json());
const menuController = require(`../controller/menu.controller`);
const { auth } = require(`../auth/auth`);

app.get("/", menuController.getAllMenu);
app.post("/add", auth, menuController.addMenu);
app.post("/find", menuController.findMenu);
app.put("/:id", auth, menuController.updateMenu);
app.get("/:id", menuController.findMenubyId);
app.delete("/:id", auth, menuController.deleteMenu);
module.exports = app;