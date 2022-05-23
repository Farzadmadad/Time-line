const post = require('../models/post');
const postModel =require('../models/post');
const moment = require('moment')



const homPage = async(req,res) => {
    await postModel.find()
        .then(result=> {
            console.log(result)
            res.render('index',{
                maseg:result,
                isAdmin:true,
                post:'',
               
                
        })
        
       
   
        
    });
 
 }
 const addPost=(req,res)=>{
     
    
     let newPost=new postModel(req.body);
     
     newPost.save()
           .then( () =>{
               res.render('index',{
                
            
        })
               res.redirect('/')

           })
           .catch(err =>{
               console.log(err)
           })
     

 }
 const notFound = (req,res) => {
    
    res.render('notFound');
 }
 module.exports={
    homPage,
    notFound,
    addPost
 }