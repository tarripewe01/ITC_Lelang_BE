const ProdukModel = require("../models/Produk");
const UserModel = require("../models/users");

const createProduct = async (req, res) => {
  const fileName = req.files.map((path) => {
    return path.filename;
  });
  let { photo_path, ...details } = req.body;
  photo_path = `/uploads/${fileName}`;
  const dat = { ...details, photo_path };
  const newData = new ProdukModel(dat);
  try {
    const Data = await newData.save();
    res.status(200).json({
      Data: Data,
    });
  } catch (error) {
    res.status(500).json(error.message);
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
    return path.filename;
  });
  let { photo_path, ...details } = req.body;
  photo_path = `/uploads/${fileName}`;

  const dat = { ...details, photo_path };

  try {
    const product = await ProdukModel.findByIdAndUpdate(id, dat, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await ProdukModel.findByIdAndRemove(id);
    res.json({ message: "Produk Deleted Successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const favorite = async (req, res) => {
  try {
    const product = await ProdukModel.findById(req.params.id);

    if (
      product.favorites.filter(
        (favorite) => favorite.user.toString() === req.user.id
      ).length > 0
    ) {
      return res.status(400).json({ msg: "Produk sudah di favorite" });
    }

    product.favorites.unshift({ user: req.user.id });

    await product.save();

    res.json(product.favorites);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const unfavorite = async (req, res) => {
  try {
    const product = await ProdukModel.findById(req.params.id);

    // Check if the post has already been favorited
    if (
      product.favorites.filter(
        (favorite) => favorite.user.toString() === req.user.id
      ).length === 0
    ) {
      return res.status(400).json({ msg: "Produk has not yet been favorited" });
    }

    // get remove index
    const removeIndex = product.favorites
      .map((favorite) => favorite.user.toString())
      .indexOf(req.user.id);

    product.favorites.splice(removeIndex, 1);

    await product.save();

    res.json(product.favorites);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const createBid = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");
    const product = await ProdukModel.findById(req.params.id);

    const { nominal_bid } = req.body;

    const newBid = {
      nominal_bid,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    };

    product.bids.unshift(newBid);

    await product.save();

    res.json(product.bids);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  favorite,
  unfavorite,
  createBid,
};
