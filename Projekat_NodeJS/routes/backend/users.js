let express = require('express');
const userModel = require("../../models/user_model");
let router = express.Router();
let bcrypt=require('bcryptjs');

router.post("/users", async (request, response) => {
  try {
  const { username, email, password, is_admin } = request.body;
  if (!(email && password && username)) {
    res.status(400).send("All input is required");
  }

  const oldUser = await userModel.findOne({ email });
  
  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }

  //Enkriptovanje sifre
  encryptedPassword = await bcrypt.hash(password, 10);
  
  const user = await userModel.create({
    username,
    email: email.toLowerCase(), 
    password: encryptedPassword,
    is_admin
  });

      response.status(201).send(user);
    } catch (error) {
      console.log(error)
      response.status(500).send(error);
    }
});

router.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/users/:id", async (request, response) => {
  const id = request.params.id;

  try {
    const user = await userModel.findById(id);
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/users/:id", async (request, response) => {
  try {
    let obj = request.body;
    obj.password=await bcrypt.hash(obj.password, 10);
    const user =await userModel.findByIdAndUpdate(request.params.id,obj);
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.delete("/users/:id", async (request, response) => {
  try {
    const user = await userModel.findByIdAndDelete(request.params.id);

    if (!user) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;