import express from "express";
import path from "path";
import { QuizApp } from "./routes/QuizApp.js";
import { pathResolveMiddleware } from "./middleware/pathResolve.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.urlencoded({ extended: false }));
app.use("/api", QuizApp);

app.use(express.static(path.resolve("../client/dist")));
app.use(pathResolveMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
