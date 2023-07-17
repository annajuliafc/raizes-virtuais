import express from "express";
import farmerRoutes from "./farmers-routes.js";
import dashboardRoutes from "./dashboard-routes.js";

const routes = (app) => {
  app.use(express.json(), farmerRoutes, dashboardRoutes);
};

export default routes;
