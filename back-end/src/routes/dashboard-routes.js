import express from "express";
import DashboardController from "../controllers/dashboard-controller.js";

const router = express.Router();

router.get("/dashboard", DashboardController.getDashboard);

export default router;
