const mongoos =require('mongoose')

const postSchema = mongoos.Schema({
    post:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default: Date.now()
    }
    
   
   

})

module.exports=mongoos.model('post',postSchema)