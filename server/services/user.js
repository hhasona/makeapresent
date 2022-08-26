const { Op } = require("sequelize")
const { User } = require("../db/models")

class UserService {
  getAllUsers = async () => {
    return await User.findAll()
  }

  getUserByEmail = async (email) => {
    return await User.findOne({
      where: {
        email: {
          [Op.like]: "%" + email + "%",
        },
      },
    })
  }
  createUser = async (user) => {}
}

module.exports = new UserService()
