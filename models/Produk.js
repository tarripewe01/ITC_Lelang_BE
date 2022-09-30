const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  produkId: {
    type: String,
  },
  cabang: {
    type: String,
    enum: [
      "Jakarta",
      "Bandung",
      "Medan",
      "Pekanbaru",
      "Pangkal Pinang",
      "Kalimantan",
    ],
    default: "Jakarta",
  },
  nama_produk: {
    type: String,
    required: true,
  },
  photo_produk: {
    type: [String],
  },
  harga: {
    type: Number,
    required: true,
  },
  no_lot: {
    type: Number,
    required: true,
  },
  kondisi_mesin: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F"],
  },
  kondisi_exterior: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F"],
  },
  kondisi_interior: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F", "-"],
  },
  kategori_produk: {
    type: String,
    enum: ["Mobil", "Motor"],
    required: true,
  },
  merk_produk: {
    type: String,
    required: true,
  },
  model_produk: {
    type: String,
    required: false,
  },
  tahun_produk: {
    type: Number,
    required: true,
  },
  transmisi: {
    type: String,
    enum: ["Manual", "Otomatis"],
    required: true,
  },
  no_rangka: {
    type: String,
    required: true,
  },
  no_mesin: {
    type: String,
    required: true,
  },
  kapasitas_mesin: {
    type: Number,
    required: true,
  },
  odometer: {
    type: Number,
    required: true,
  },
  isActive: {
    type: String,
    enum: ["0", "1"],
    default: "1",
  },
  catatan: {
    type: String,
    required: false,
  },
  no_polisi: {
    type: String,
    required: true,
  },
  warna: {
    type: String,
    required: true,
  },
  stnk: {
    type: String,
    enum: ["Ada", "Tidak Ada"],
    required: true,
  },
  exp_stnk: {
    type: String,
    required: true,
  },
  faktur: {
    type: String,
    enum: ["Ada", "Tidak Ada"],
    required: true,
  },
  ktp: {
    type: String,
    enum: ["Ada", "Tidak Ada"],
    required: true,
  },
  kwitansi: {
    type: String,
    enum: ["Ada", "Tidak Ada"],
    required: true,
  },
  form_A: {
    type: String,
    enum: ["Ada", "Tidak Ada"],
    required: true,
  },
  sph: {
    type: String,
    enum: ["Ada", "Tidak Ada"],
    required: false,
  },
  keur: {
    type: String,
    enum: ["Ada", "Tidak Ada"],
    required: false,
  },
  bpkb: {
    type: String,
    enum: ["Ready", "14 hari kerja"],
    required: true,
  },
  tanggal_mulai: {
    type: Date,
    default: new Date(),
  },
  tanggal_selesai: {
    type: Date,
    default: new Date(),
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("products", productSchema);
