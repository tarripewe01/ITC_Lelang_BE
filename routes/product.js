const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  // favorite,
  // unfavorite,
  // createBid
} = require("../controllers/product");

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
// router.put("/favorite/:id", favorite);
// router.put("/unfavorite/:id", auth, unfavorite);
// router.post("/bid/:id", auth, createBid);

module.exports = router;