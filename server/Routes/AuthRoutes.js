const { register, login } = require("../Controllers/AuthControllers");
const { checkUser } = require("../Middlewares/AuthMiddleware");

const router = require("express").Router();


router.post("/", checkUser);
router.post("/register",register);
router.post("/login",login);
router.post("/pago",checkUser);
router.post("/perfil",checkUser);

module.exports = router;