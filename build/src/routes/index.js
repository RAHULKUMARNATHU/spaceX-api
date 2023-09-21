import express from "express";
import spaceXController from "../controllers/index";
import { validate } from "../middlewares/authorize";
const router = express.Router();
router.route("/data").get(validate, spaceXController.spaceXData);
export default router;
