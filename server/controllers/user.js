const userService = require("../services/user")

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers()
    return res.status(200).send(users)
  } catch (err) {
    next(err)
  }
}

const getUserByEmail = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await userService.getUserByEmail(email)
    if (!user) {
      return res.status(200).send("User dosn't exist, please try again")
    }
    if (user.dataValues.password !== password)
      return res.status(200).send("Password Isn't correct,please try again")
    return res.status(200).send(user)
  } catch (err) {
    return res.status(404).send(err.message)
  }
}

const createUser = async (req, res, next) => {
  try {
    newUser = req.body
    const user = await userService.createUser(newUser)
    return res.status(200).send("User has been successfully added")
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
}
