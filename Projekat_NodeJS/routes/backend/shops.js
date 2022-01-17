let express = require('express');
const shopModel = require("../../models/shop_model");
let router = express.Router();
let path=require('path');

router.post("/shops", async (request, response) => {
    const shop = new shopModel(request.body);
    try {
      await shop.save();
      response.send(shop);
    } catch (error) {
      response.status(500).send(error);
    }
});

router.get("/shops", async (request, response) => {
  const shops = await shopModel.find({});

  try {
    response.send(shops);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/shops/:id", async (request, response) => {
  const id = request.params.id;

  try {
    const shop = await shopModel.findById(id);
    response.send(shop);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/shops/:id", async (request, response) => {
  try {
    const shop =await shopModel.findByIdAndUpdate(request.params.id,request.body);
    await shop.save();
    response.send(shop);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.delete("/shops/:id", async (request, response) => {
  try {
    const shop = await shopModel.findByIdAndDelete(request.params.id);

    if (!shop) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;