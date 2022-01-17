const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({
  couponNumber: {
    type: String,
    required: true,
  },
  isValid: {
    type: Boolean,
    required: true,
    default : true
  },
  discountValue: {
    type: Number,
    required:true
  },
  validTo:{
      type: Date,
      default:false
  }
});

const Coupon = mongoose.model("Coupon", CouponSchema);

module.exports=Coupon;