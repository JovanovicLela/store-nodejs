const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  numberOfEmployees: {
    type: Number,
    required: true,
  },
  revenue: {
    type: Number,
    required:true
  },
  name:{
      type: String,
      required:true
  }
});

const Shop = mongoose.model("Shop", ShopSchema);

module.exports=Shop;