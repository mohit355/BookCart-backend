const express = require("express");
const router = express.Router();

const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require("../controllers/category");
const { requireSigin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/category/create/:userId", requireSigin, isAuth, isAdmin, create);
router.get("/category/:categoryId", read);
router.put(
  "/category/:categoryId/:userId",
  requireSigin,
  isAuth,
  isAdmin,
  update
);
router.delete(
  "/category/:categoryId/:userId",
  requireSigin,
  isAuth,
  isAdmin,
  remove
);
router.get("/categories/", list);

router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;
