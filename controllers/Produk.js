const { json } = require("sequelize");
const ProdukModel = require("../models/Produk");

const createProduct = async (req, res) => {
  const newProduk = new ProdukModel(req.body);

  try {
    const savedProduk = await newProduk.save();
    res.status(200).json(savedProduk);
  } catch (error) {
    res.status(500).json(error);
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
  const {
    cabang,
    nama_produk,
    photo_produk,
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
    status_lelang,
  } = req.body;

  try {
    const formUpdateProduk = {
      cabang,
      nama_produk,
      photo_produk,
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
      status_lelang,
      _id: id,
    };
    await ProdukModel.findByIdAndUpdate(id, formUpdateProduk, { new: true });
    res.json(formUpdateProduk);
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

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
