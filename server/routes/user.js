const userRouter = require("express").Router()
const {
  getAllUsers,
  getUserByEmail,
  createUser,
} = require("../controllers/user")
userRouter.get("/", getAllUsers)
userRouter.post("/email", getUserByEmail)
userRouter.post("/", createUser)

module.exports = userRouter
