const mongoose= require('mongoose')
const connectdb=async()=>{
    try{
       await  mongoose.connect('mongodb+srv://ouerghihana98:q4l2p8JOyJMklS6k@cluster0.uhwo8ux.mongodb.net/?retryWrites=true&w=majority')
        console.log('you are connected ' );
    }catch(err){
        console.log(err)
    }
}


module.exports=connectdb
