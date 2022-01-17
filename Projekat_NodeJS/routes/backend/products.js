let express = require('express');
const productModel = require("../../models/product_model");
let router = express.Router();
let path=require('path');

router.post("/products", async (request, response) => {
    const product = new productModel(request.body);
    try {
      await product.save();
      response.send(product);
    } catch (error) {
      response.status(500).send(error);
    }
});

router.get("/products", async (request, response) => {
  const products = await productModel.find({});

  try {
    response.send(products);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/products/:id", async (request, response) => {
  const id = request.params.id;

  try {
    const product = await productModel.findById(id);
    response.send(product);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/products/:id", async (request, response) => {
  try {
    const product =await productModel.findByIdAndUpdate(request.params.id,request.body);
    await product.save();
    response.send(product);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.delete("/products/:id", async (request, response) => {
  try {
    const product = await productModel.findByIdAndDelete(request.params.id);

    if (!product) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;