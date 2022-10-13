const ProdukModel = require("../models/product");
const UserModel = require("../models/users");

const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new ProdukModel({
    ...product,
    createdAt: new Date().toISOString(),
  });

  try {
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong !" });
  }
};

const getProducts = async (req, res) => {
  try {
    const product = await ProdukModel.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong !" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProdukModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong !" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    product_path,
    cabang,
    nama_produk,
    harga,
    no_lot,
    kondisi_mesin,
    kondisi_exterior,
    kondisi_interior,
    kategori_produk,
    merk_produk,
    model_produk,
    tahun_produk,
    transmisi,
    no_rangka,
    no_mesin,
    kapasitas_mesin,
    odometer,
    isActive,
    catatan,
    no_polisi,
    warna,
    stnk,
    exp_stnk,
    faktur,
    ktp,
    kwitansi,
    form_A,
    sph,
    keur,
    bpkb,
    tanggal_mulai,
    tanggal_selesai,
    waktu_mulai,
    waktu_selesai,
    status_lelang,
  } = req.body;

  try {
    const updateProduct = {
      product_path,
      cabang,
      nama_produk,
      harga,
      no_lot,
      kondisi_mesin,
      kondisi_exterior,
      kondisi_interior,
      kategori_produk,
      merk_produk,
      model_produk,
      tahun_produk,
      transmisi,
      no_rangka,
      no_mesin,
      kapasitas_mesin,
      odometer,
      isActive,
      catatan,
      no_polisi,
      warna,
      stnk,
      exp_stnk,
      faktur,
      ktp,
      kwitansi,
      form_A,
      sph,
      keur,
      bpkb,
      tanggal_mulai,
      tanggal_selesai,
      waktu_mulai,
      waktu_selesai,
      status_lelang,
    };
    const product = await ProdukModel.findByIdAndUpdate(id, updateProduct, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong !" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await ProdukModel.findByIdAndRemove(id);
    res.json({ message: "Produk Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong !" });
  }
};

// const favorite = async (req, res) => {
//   try {
//     const product = await ProdukModel.findById(req.params.id);
//     console.log(product)

//     if (
//       product.favorites.filter(
//         (favorite) => favorite.user.toString() === req.user.id
//       ).length > 0
//     ) {
//       return res.status(400).json({ msg: "Produk sudah di favorite" });
//     }

//     product.favorites.unshift({ user: req.user.id });

//     await product.save();

//     res.json(product.favorites);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// };

// const unfavorite = async (req, res) => {
//   try {
//     const product = await ProdukModel.findById(req.params.id);

//     // Check if the post has already been favorited
//     if (
//       product.favorites.filter(
//         (favorite) => favorite.user.toString() === req.user.id
//       ).length === 0
//     ) {
//       return res.status(400).json({ msg: "Produk has not yet been favorited" });
//     }

//     // get remove index
//     const removeIndex = product.favorites
//       .map((favorite) => favorite.user.toString())
//       .indexOf(req.user.id);

//     product.favorites.splice(removeIndex, 1);

//     await product.save();

//     res.json(product.favorites);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// };

// const createBid = async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.user.id).select("-password");
//     const product = await ProdukModel.findById(req.params.id);

//     const { nominal_bid } = req.body;

//     const newBid = {
//       nominal_bid,
//       name: user.name,
//       avatar: user.avatar,
//       user: req.user.id,
//     };

//     product.bids.unshift(newBid);

//     await product.save();

//     res.json(product.bids);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// };

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
