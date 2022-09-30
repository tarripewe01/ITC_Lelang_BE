const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: false,
  },
  nama_lengkap: {
    type: String,
    required: false,
  },
  jenis_kelamin: {
    type: String,
    enum: ["pria", "wanita"],
    required: false,
  },
  alamat: {
    type: String,
    required: false,
  },
  no_ktp: {
    type: Number,
    required: false,
  },
  no_npwp: {
    type: Number,
    required: false,
  },
  bank: {
    type: String,
    enum: ["BRI", "BNI", "BCA", "BTN", "Mandiri"],
    required: false,
  },
  no_rekening: {
    type: Number,
    required: false,
  },
  no_rekening: {
    type: Number,
    required: false,
  },
  photo_profil: {
    type: String,
    required: false,
  },
  isActive: {
    type: String,
    enum: ["0", "1"],
    default: "1",
  },
  lelang_mulai: {
    type: Date,
    required: true,
  },
  lelang_berakhir: {
    type: Date,
    required: true,
  },
  status_lelang: {
    type: String,
    enum: ["0", "1"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("users", userSchema);
