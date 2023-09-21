import express from "express";
const app = express();

import cors from "cors";
import { logger } from "./logger";
import routes from "./src/routes";

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Backend is running" });
});

app.listen(3030, () => {
  logger.info(`server is running on port ${3030}`);
});

module.exports = app;
