import express from "express";
import {
  createNewUrlHandler,
  getUrlHandler,
  getUrlHistoryHandler,
  getDataHandler
} from "../controllers/ShortUrlController.js";

const urlRouter = express.Router();
urlRouter.post("/api/url/shorturl", createNewUrlHandler);
urlRouter.get("/:shortId", getUrlHandler);
urlRouter.get("/api/url/activity/:shortId", getUrlHistoryHandler);
urlRouter.get("/api/getClientData",getDataHandler);

export { urlRouter };
