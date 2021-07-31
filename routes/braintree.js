const express = require("express");
const router = express.Router();

const { requireSigin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { generateToken, processPayment } = require("../controllers/braintree");

router.get("/braintree/getToken/:userId", requireSigin, isAuth, generateToken);
router.post("/braintree/payment/:userId", requireSigin, isAuth, processPayment);

router.param("userId", userById);

module.exports = router;
