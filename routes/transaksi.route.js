const express = require(`express`);
const app = express();
app.use(express.json());
const userController = require(`../controller/transaksi.controller`);
const { auth } = require(`../auth/auth`);

app.get("/", auth, userController.getAllTransaksi);
app.post("/add", auth, userController.addTransaksi);
app.post("/find", auth, userController.findTransaksi);
app.put("/:id", auth, userController.updateTransaksi);
app.delete("/:id", auth, userController.deleteTransaksi);
module.exports = app;