import express from "express";
import path from "path";
import { QuizApp } from "./routes/QuizApp.js";
import { pathResolveMiddleware } from "./middleware/pathResolveMiddleware.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", QuizApp);

app.use(express.static(path.resolve("../client/dist")));
app.use(pathResolveMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
