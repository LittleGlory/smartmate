const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = 'aassseffd';
const mongoose = require("mongoose");
const User = require('./models/user');

app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.json());

mongoose.connect('mongodb+srv://saakshi:p4IsmeMARhGKplsS@cluster0.fclaidp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register',async (req,res)=>{
   const {firstname,lastname,email,password}=req.body;
   try{
    const UserDoc= await User.create({
      firstname,
      lastname,
      email,
      password:bcrypt.hashSync(password,salt)});
   res.json(UserDoc);
   } catch (e){
    res.status(400).json(e);
   }
});
app.post('/', async (req,res) => {
   const {email,password} = req.body;
   const userDoc = await User.findOne({email});
   const passOk = bcrypt.compareSync(password, userDoc.password);
   if (passOk) {
     // logged in
     jwt.sign({email,id:userDoc._id}, secret, {}, (err,token) => {
       if (err) throw err;
       res.cookie('token', token).json({
         id:userDoc._id,
         email,
       });
     });
   } else {
     res.status(400).json('wrong credentials');
   }
 });
/*app.post('/',async (req,res)=>{
   const {email,password}=req.body;
   const UserDoc = await User.findOne({email});
   const passOk = bcrypt.compareSync(password,UserDoc.password);
   res.json(passOk);
   if (passOk){
      jwt.sign({email,id:UserDoc._id},secret, {}, (err,token)=>{
         res.json(token);
         //if (err) throw err;
         //res.cookie('token',token).json("ok");
      });

   }else{
      res.status(400).json("Wrong Credentials!!");
      }
   
   
});
*/

app.listen(4000);
//p4IsmeMARhGKplsS
//mongodb+srv://saakshi:p4IsmeMARhGKplsS@cluster0.fclaidp.mongodb.net/
