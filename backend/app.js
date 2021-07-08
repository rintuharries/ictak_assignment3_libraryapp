const express = require('express');
const Bookdata = require('./src/model/Bookdata');
const AuthorData = require('./src/model/Authordata');
const UserData=require('./src/model/Userdata')
// const User = require('./src/model/user');
const cors = require('cors');
// const  bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());
username='admin';
password='1234';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/insertbook',function(req,res){
   
    console.log(req.body);
   var item={ 
    bookid:req.body.book.bookid,
    title: req.body.book.title,
    author: req.body.book.author,
    genre: req.body.book.genre,
    imageUrl: req.body.book.imageUrl
 }

var book= new Bookdata(item);
book.save();//save to database
});
app.post('/insertauthor',verifyToken,function(req,res){
var author={
  authorid:req.body.author.authorid,
  authorname: req.body.author.authorname,
  work: req.body.author.work,
  published: req.body.author.published,
  imageUrl: req.body.author.imageUrl
}

var author=AuthorData(author);
author.save();//save to database
});

app.get('/books',function(req,res){
    
    Bookdata.find()
                .then(function(books){
                    res.send(books);
                });
});
app.get('/authors',function(req,res){
    
  AuthorData.find()
              .then(function(authors){
                  res.send(authors);
              });
});
app.get('/book/:id',  (req, res) => {
  
  const id = req.params.id;
    Bookdata.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
})
app.get('/author/:id',  (req, res) => {
  
  const id = req.params.id;

    AuthorData.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    });
})
app.post('/register',(req,res)=>{
  console.log(req.body)
var user={
  uname:req.body.uname,
  email:req.body.email,
  password:req.body.password
}
var user= new UserData(user);
user.save();
})
app.post('/login', (req, res) => {

    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if (password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else { 
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

app.put('/updatebook',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      bookid=req.body.bookid,
      title=req.body.title,
      author= req.body.author,
      genre= req.body.genre,
      imageUrl= req.body.imageUrl
     Bookdata.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "bookid":bookid,
                                  "title":title,
                                  "author":author,
                                  "genre":genre,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })
app.put('/updateauthor',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    authorid=req.body.authorid,
    authorname= req.body.authorname,
    work= req.body.work,
    published= req.body.published,
    imageUrl= req.body.imageUrl
   AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "authorid":authorid,  
                                "authorname":authorname,
                                "work":work,
                                "published":published,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })
   
app.delete('/removebook/:id',(req,res)=>{
   
     id = req.params.id;
     Bookdata.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })

app.delete('/removeauthor/:id',(req,res)=>{
   
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
     

app.listen(3000, function(){
    console.log('listening to port 3000');
});
