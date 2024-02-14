const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/feedback")
.then(
    console.log("connected")
)
const FeedSchema=new mongoose.Schema({
    userName:String,
     feedBack:String
});

const collection =new mongoose.model('users',FeedSchema);
module.exports=collection;