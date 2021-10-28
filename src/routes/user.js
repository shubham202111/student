const express = require('express');

const router = new express.Router();
var mongoose = require('mongoose')
const studentModel = require('../models/user.model');

//1:Create User :: POST
router.post('/v1/createUser',(req,res)=>{
    const User = new studentModel(req.body);
  
    User.save((err,data)=>{ 
        if(data){ 
            res.json({
                statusCode:200,
                statusMessage:'User Created Successfully'
            }) 
        }else{ 
        
            res.json({ statusCode:400, statusMessage:'Unable To Create'}); 
        }
    })    
})
//2:Fetch User :: GET
router.get('/v1/getUserList',(req,res)=>{
  studentModel.find().exec((err, user)=>{
      if (!user){
        res.json({ statusCode:404,statusMessage: "user not found" });
      }
      res.json({statusCode:200,statusMessage:'Fetch List Successfully',data:user});       
     })
});
//getby id
router.get('/v1/getUserListByid/:id',(req,res)=>{
  studentModel.find({_id:req.params.id}).exec((err, user)=>{
      if (!user){
        res.json({ statusCode:404,statusMessage: "user not found" });
      }
      res.json({statusCode:200,statusMessage:'Fetch List Successfully',data:user});       
     })
});
//3:Update user :: PUT

router.put('/v1/updateUser/:id', (req,res)=>{
    const _id = req.params.id;

    studentModel.findOneAndUpdate({ _id },
      req.body,
      { new: true },
      (err, user) => {
      if (err) {
        res.json({statusCode:400,message:'Unable To Update'});
      }
      res.json({statusCode:200,message:"Updated Successfully"});
    });

  });

//4: delete user :: DELETE
router.delete('/v1/deleteUser/:id',(req,res)=>{
    const _id = req.params.id;
  
    studentModel.findByIdAndDelete({ _id },
      (err, user) => {
      if (err) {
        res.json({statusCode:400,message:'Unable To delete'});
      }
      res.json({statusCode:200,message: "user delete successfully"})
    });
  
  });

      
    
    
      

 

module.exports = router;