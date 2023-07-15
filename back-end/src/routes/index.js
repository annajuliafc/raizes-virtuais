import express from "express";
import farmerRoutes from "./farmers-routes.js";

const routes = (app) => {
  app.use(express.json(), farmerRoutes);
};

export default routes;
