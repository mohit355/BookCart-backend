const express = require("express");
const router = express.Router();

const { requireSigin, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRealted,
  listCategories,
  listBySearch,
  photo,
  listSearch,
} = require("../controllers/product");
const { userById } = require("../controllers/user");

router.post("/product/create/:userId", requireSigin, isAuth, isAdmin, create);
router.get("/product/:productId", read);

router.put(
  "/product/:productId/:userId",
  requireSigin,
  isAuth,
  isAdmin,
  update
);

router.delete(
  "/product/:productId/:userId",
  requireSigin,
  isAuth,
  isAdmin,
  remove
);
router.get("/products", list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRealted);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
