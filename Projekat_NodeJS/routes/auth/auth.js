let express = require('express');
const User = require("../../models/user_model");
let router = express.Router();
let path=require('path');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const TOKEN_KEY = "2AouR3eCDQTIR0FU2eMezf3OpWvEt88z";

//api za registraciju
router.post("/register", async (req, res) => {    
    try {
      const { username, email, password, is_admin } = req.body;
      if (!(email && password && username)) {
        res.status(400).send("All input is required");
      }
  
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      
      encryptedPassword = await bcrypt.hash(password, 10);
  
      
      const user = await User.create({
        username,
        email: email.toLowerCase(), 
        password: encryptedPassword,
        is_admin
      });
  
      
      const token = jwt.sign(
        { user_id: user._id, email },
        TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
     
      user.token = token;
      await user.save();
  
     
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    
  });

  
  router.post("/login",async (req, res) => {
    try {
        
        const { email, password } = req.body;
    
       
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
        
          const token = jwt.sign(
            { user_id: user._id, email },
            TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
         
          user.token = token;
          await user.save();
    
          
          res.status(200).json(user);
        }else{
          res.status(400).send("Invalid Credentials");
        }
      } catch (err) {
        console.log(err);
      }
    });

module.exports = router;