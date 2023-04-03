import express from "express";
import cors from "cors";

const app = express();

const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "true");
  next();
});

app.use(cors());

// app.get("/post", (req, res) => {
//   res.json("Hello");
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));
