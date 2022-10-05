const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const auth = require("../middleware/auth");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  favorite,
  unfavorite,
  createBid
} = require("../controllers/Produk");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", upload.any("photo_path"), updateProduct);
router.delete("/:id", deleteProduct);
router.post("/", upload.any("photo_path"), createProduct);
router.put("/favorite/:id", auth, favorite);
router.put("/unfavorite/:id", auth, unfavorite);
router.post("/bid/:id", auth, createBid);

module.exports = router;
