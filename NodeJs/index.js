import express from "express";
import { connectMongoDB } from "./connection.js";
import { logMiddlerware } from "./middlewares/loggerMiddleware.js";
import { router } from "./routes/userRoute.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {});

connectMongoDB("mongodb://127.0.0.1:27017/user")
  .then(() => {
    console.log("MongoDB connection successful! 🚀");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB. Error:", err);
  });

app.use(express.urlencoded({ extended: false }));
app.use(logMiddlerware);

app.use("", router);
