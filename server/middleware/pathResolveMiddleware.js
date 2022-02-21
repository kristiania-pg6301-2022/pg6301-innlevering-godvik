import path from "path";

export const pathResolveMiddleware = (req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    res.sendStatus(404);
    next();
  }
};
