const express = require(`express`)
const app = express()
app.use(express.json())
const detail_transaksiController =
require(`../controller/detail_transaksi.controller.js`)
app.get("/", detail_transaksiController.getAllDetail)
app.post("/add", detail_transaksiController.addDetail)
app.post("/find", detail_transaksiController.findDetail)
app.put("/:id", detail_transaksiController.updateDetail)
app.delete("/:id", detail_transaksiController.deleteDetail)
module.exports = app