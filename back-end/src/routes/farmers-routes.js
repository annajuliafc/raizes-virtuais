import express from "express";
import FarmersController from "../controllers/farmers-controller.js";

const router = express.Router();

router
  .get("/farmer", FarmersController.listFarmers)
  .get("/farmer/:id", FarmersController.getFarmerPerId)
  .post("/farmer", FarmersController.registerFarmer)
  .put("/farmer/:id", FarmersController.updateFarmer)
  .delete("/farmer/:id", FarmersController.deleteFarmer);

export default router;
