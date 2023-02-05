import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

process.on("uncaughtException", (err: Error) => {
  console.log(`Error: ${err.message}`);
  console.log("Server is shutting down due to uncaught exception");
  process.exit(1);
});

dotenv.config();
mongoose.connect(process.env.DB_URI as string).then((data) => {
  console.log(`MongoDb is connected to the host ${data.connection.host}`);
});
const PORT = Number(process.env.PORT) || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

process.on("unhandledRejection", (err: Error) => {
  console.log(`Error: ${err.message}`);
  console.log("Server is shutting down due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
