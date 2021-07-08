const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.fmpzz.mongodb.net/Library?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;

const UserSchema= new Schema({
  uname:String,
  email:String,
  password:String
});


//Model creation
const Userdata=mongoose.model('user',UserSchema);

module.exports=Userdata;