let express = require('express');
const supplierModel = require("../../models/supplier_model");
let router = express.Router();
let path=require('path');

router.post("/suppliers", async (request, response) => {
    const supplier = new supplierModel(request.body);
    try {
      await supplier.save();
      response.send(supplier);
    } catch (error) {
      response.status(500).send(error);
    }
});

router.get("/suppliers", async (request, response) => {
  const suppliers = await supplierModel.find({});

  try {
    response.send(suppliers);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/supplier/:id", async (request, response) => {
  const id = request.params.id;

  try {
    const supplier = await supplierModel.findById(id);
    response.send(supplier);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/suppliers/:id", async (request, response) => {
  try {
    const supplier =await supplierModel.findByIdAndUpdate(request.params.id,request.body);
    await supplier.save();
    response.send(supplier);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.delete("/suppliers/:id", async (request, response) => {
  try {
    const supplier = await supplierModel.findByIdAndDelete(request.params.id);

    if (!supplier) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;