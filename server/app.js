import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

let port = 3000 || 4500;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let message = app.post("/register", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("POST " + data);
});

app.listen(port, () => {
  console.log(`Listening on port${port}`);
});
