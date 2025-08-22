import { User } from "../models/userModel.js";
import mongoose from "mongoose";

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function getUserHandler(req, res) {
  try {
    if (isValidObjectId(req.params.id)) {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }
      return res.json({ status: "success", user: user });
    } else {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}

async function getAllUsersHandler(req, res) {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}

async function addNewUserHandler(req, res) {
  try {
    const { first_name, last_name, email, gender, job_title } = req.body;
    if (!first_name || !last_name || !email || !gender || !job_title) {
      return res
        .status(400)
        .json({ status: "error", message: "Missing required fields" });
    }

    const user = await User.create({
      first_name,
      last_name,
      email,
      gender,
      job_title,
    });

    return res.status(201).json({
      status: "success",
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}

async function editUserHandler(req, res) {
  try {
    if (isValidObjectId(req.params.id)) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (!updatedUser) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }

      return res.json({
        status: "success",
        des: "User updated successfully",
        data: updatedUser,
      });
    } else {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}

async function deleteUserHandler(req, res) {
  try {
    if (isValidObjectId(req.params.id)) {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
      if (!deletedUser) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }

      return res.json({
        status: "success",
        des: "User deleted successfully",
        data: deletedUser,
      });
    } else {
      return res.json({
        status: "success",
        des: "User deleted successfully",
        data: deletedUser,
      });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
}

export {
  getUserHandler,
  getAllUsersHandler,
  addNewUserHandler,
  editUserHandler,
  deleteUserHandler,
};
