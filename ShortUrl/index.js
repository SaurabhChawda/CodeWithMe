import express from "express";
import cors from 'cors'
import { connectMongoDB } from "./connection.js";
import { loggerMiddlerware } from "./middlewares/loggerMiddleware.js";
import { urlRouter } from "./routes/shortUrlRoutes.js";
const app = express();

// Connect with port
const PORT = 8000;
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(PORT, () => {});

// MongoDB Connection
connectMongoDB("mongodb://127.0.0.1:27017/shortUrl")
  .then(() => {
    console.log("MongoDB connection successful! 🚀");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB. Error:", err);
  });

// MiddlerWares
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddlerware);

// Router
app.use("", urlRouter);