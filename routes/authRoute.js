import express from "express";
import {
  authForgotPasswordController,
  authLoginController,
  authRegisterController,
  authTestController,
} from "../controller/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

//routing
// Register || method Post
router.post("/register", authRegisterController);

//Login || method Post
router.post("/login", authLoginController);

//forgot password || method Post

router.post("/forgot-password", authForgotPasswordController);

//test routes
router.get("/test", requireSignin, isAdmin, authTestController);

//protected route auth
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
