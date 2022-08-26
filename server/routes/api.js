const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const user = require("./user")

router.use("/api/user", user)

module.exports = router
