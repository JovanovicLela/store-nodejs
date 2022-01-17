let express = require('express');
const couponModel = require("../../models/coupon_model");
let router = express.Router();
let path=require('path');

router.post("/coupons", async (request, response) => {
    const coupon = new couponModel(request.body);
    try {
      await coupon.save();
      response.send(coupon);
    } catch (error) {
      response.status(500).send(error);
    }
});

router.get("/coupons", async (request, response) => {
  const coupons = await couponModel.find({});

  try {
    response.send(coupons);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/coupons/:id", async (request, response) => {
  const id = request.params.id;

  try {
    const coupon = await couponModel.findById(id);
    response.send(coupon);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/coupons/:id", async (request, response) => {
  try {
    const coupon =await couponModel.findByIdAndUpdate(request.params.id,request.body);
    await coupon.save();
    response.send(coupon);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.delete("/coupons/:id", async (request, response) => {
  try {
    const coupon = await couponModel.findByIdAndDelete(request.params.id);

    if (!coupon) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;