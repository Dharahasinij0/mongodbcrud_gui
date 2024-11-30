const mongoose=require('mongoose')
// define the schema for brand
const brandSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:String
});
module.exports=mongoose.model('Brand',brandSchema)