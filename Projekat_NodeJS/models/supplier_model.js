const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  }
});

const Supplier = mongoose.model("Supplier", SupplierSchema);

module.exports=Supplier;