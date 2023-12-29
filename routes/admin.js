const express=require('express');

const router=express.Router();

// /admin/add-product =>GET
router.get('/admin/add-product',(req,res,next)=>{
    res.setHeader().send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
        );
       
   });

   // /admin/add-product=>POST
router.post('/admin/add-product',(req,res,next)=>{
       console.log(req.body);
       res.redirect('/');
   })

module.exports=router;