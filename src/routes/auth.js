import express from "express";
import { signin, signup, getAllUser } from "../controllers/authController";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", getAllUser);
export default router;
