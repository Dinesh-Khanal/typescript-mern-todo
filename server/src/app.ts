import express from "express";
import cors from "cors";
import todoRoutes from "./routes/toduRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Please make proper API request.");
});

app.use("/api", todoRoutes);
export default app;
