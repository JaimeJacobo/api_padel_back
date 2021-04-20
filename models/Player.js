
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const playerSchema = new Schema(
  {
    name: String,
    lastName: String, 
    country: String,
    ranking: Number,
    position: String,
    brand: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Player", playerSchema);