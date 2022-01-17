const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required:true
  },
  is_admin:{
      type: Boolean,
      default:false
  },
  token:{
    type: String,
    required: false
  }
});

const User = mongoose.model("User", UserSchema);

module.exports=User;