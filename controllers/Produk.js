
const ProdukModel = require("../models/Produk");

const createProduct = async (req, res) => {

  const fileName = req.files.map((path) => {
    return path.filename
  })
  let {photo_path, ...details} = req.body
  photo_path = `/uploads/${fileName}`
  const dat = {...details, photo_path}
  const newData = new ProdukModel(dat)
try {
  const Data = await newData.save()
  res.status(200).json({
    Data: Data
  })
} catch (error) {
  res.status(500).json(error.message)
}
};


const getProducts = async (req, res) => {
  try {
    const product = await ProdukModel.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProdukModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  const fileName = req.files.map((path) => {
    return path.filename
  })
  let {photo_path, ...details} = req.body
  photo_path = `/uploads/${fileName}`

  const dat = {...details, photo_path}

  try {
    const product = await ProdukModel.findByIdAndUpdate(id, dat, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await ProdukModel.findByIdAndRemove(id);
    res.json({ message: "Produk Deleted Successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
