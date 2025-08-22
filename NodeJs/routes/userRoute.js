import express from "express";
import {
  getAllUsersHandler,
  getUserHandler,
  addNewUserHandler,
  editUserHandler,
  deleteUserHandler,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/api/users", getAllUsersHandler);
router.get("/api/user/:id", getUserHandler);
router.post("/api/addUser", addNewUserHandler);
router.patch("/api/user/edit/:id", editUserHandler);
router.delete("/api/user/delete/:id", deleteUserHandler);

export { router };
