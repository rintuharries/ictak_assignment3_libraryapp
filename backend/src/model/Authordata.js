const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.fmpzz.mongodb.net/Library?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;
const AuthorSchema= new Schema({
    authorid:Number,
    authorname:String,
    work:String,
    published:Number,
    imageUrl:String
});


//Model creation
var Authordata=mongoose.model('author',AuthorSchema);

module.exports=Authordata;



