import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors({
  origin: 'http://localhost:4200'
}));

routes(app);
export default app;
