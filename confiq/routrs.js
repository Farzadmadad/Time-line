const express = require ('express');
const userConroller = require ('../controller/user');
const route = express.Router()

route.get('/', userConroller.homPage) 
 
 route.get('/*',userConroller.notFound) 
 route.post('/', userConroller.addPost)

module.exports =route;