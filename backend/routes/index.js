const router = require("express").Router();
const notfound  = require("../controllers/notfound");
const userController = require("../controllers/userController");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("*", notfound.notfound);
module.exports = router;
