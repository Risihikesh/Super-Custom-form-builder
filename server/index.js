const express = require("express");
const app = express();

const mongoose = require("mongoose");
app.use(express.json({ limit: "50mb" }));
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
const FormRagisterSchema = require("./mongoDBSchema/formResult");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

mongoose
  .connect('mongodb+srv://krishikesh369:mTM7uWE7AO084Jmy@cluster0.masbiid.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"));

app.post("/", async function (req, res) {
  const formRagister = await FormRagisterSchema.create({
    categoryAnswers: req.body.categoryDragAndDropData,
    fillInTheBlanksAns: req.body.dropDownBlanksData,
    peragraphAns: req.body.comprehensionData,
  });
  res.status(201).json(formRagister);
});

app.listen(3000, () => {
  console.log("connected");
});

