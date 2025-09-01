const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true, select: false },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  createdAt: { type: Date, default: Date.now, index: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
