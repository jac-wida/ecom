import express from "express";
import {
  authUsers,
  getUserProfile,
  registerUser,
} from "../controllers/userContoller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUsers);
router.route("/profile").get(protect, getUserProfile);

export default router;
