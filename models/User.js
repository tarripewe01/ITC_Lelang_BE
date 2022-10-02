const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    nama_lengkap: {
      type: String,
      required: true,
    },
    jenis_kelamin: {
      type: String,
      enum: ["Pria", "Wanita"],
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
    },
    no_rekening: {
      type: Number,
      required: false,
    },
    photo_profil: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
