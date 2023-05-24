const express = require(`express`);
const app = express();
app.use(express.json());
const mejaController = require(`../controller/meja.controller`);
const { auth, isRole } = require(`../auth/auth`);

app.get("/", auth, mejaController.getAllMeja);
app.post("/add", auth, mejaController.addMeja);
app.post("/find", auth, mejaController.findMeja);
app.get("/:id", mejaController.findMejabyId);
app.put("/:id", auth, mejaController.updateMeja);
app.delete("/:id", auth, mejaController.deleteMeja);
module.exports = app;