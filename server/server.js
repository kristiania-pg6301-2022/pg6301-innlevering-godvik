import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", (req, res) => {
  res.send("Hello World");
});

app.use(express.static(path.resolve("../client/dist")));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    res.sendStatus(404);
    next();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
