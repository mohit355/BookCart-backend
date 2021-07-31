const express = require("express");
const router = express.Router();

const { requireSigin, isAuth, isAdmin } = require("../controllers/auth");
const {
  userById,
  read,
  update,
  purchaseHistory,
} = require("../controllers/user");

router.get("/secret/:userId", requireSigin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});
router.get("/user/:userId", requireSigin, isAuth, read);
router.put("/user/:userId", requireSigin, isAuth, update);
router.get("/orders/by/user/:userId", requireSigin, isAuth, purchaseHistory);

router.param("userId", userById);

module.exports = router;
