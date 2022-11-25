import express from "express";
import { verifyJwtToken } from "../Middlewares/index.js";
import {
  addUser,
  deleteUser,
  getUser,
  login,
  updateUser,
} from "../Models/users.js";

const router = express.Router();

export const addContactData = (req, res, next) => {
  addUser(req)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};
export const updateContactData = (req, res, next) => {
  updateUser(req)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};
export const loginData = (req, res, next) => {
  login(req)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

export const getContactData = (req, res, next) => {
  getUser(req)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

export const deleteUserData = (req, res, next) => {
  deleteUser(req)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

router.post("/add", addContactData);
router.patch("/update", verifyJwtToken, updateContactData);
router.post("/login", loginData);
router.get("/getUser", verifyJwtToken, getContactData);
router.delete("/delete", verifyJwtToken, deleteUserData);

export { router as usersController };
