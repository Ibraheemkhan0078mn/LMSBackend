import mongoose from 'mongoose'



async function dbConnection (){
    try{
        mongoose.connect("mongodb://localhost:27017/LMS")
        .then((response)=>{
            console.log("Mongodb is connected")
        })
    }catch(error){
        console.log("something went in db connection")
    }

}







export default dbConnection