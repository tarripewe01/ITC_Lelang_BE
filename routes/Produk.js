const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/Produk");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", upload.any("photo_path"), updateProduct);
router.delete("/:id", deleteProduct);
router.post("/", upload.any("photo_path"), createProduct);

module.exports = router;
