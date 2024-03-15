import mongoose from "mongoose";

const Connection = () => {
    // const URL = "mongodb://localhost:27017/crud_db";
    // try{
    //     mongoose.connect(URL, { useUnifiedTopology : true, useNewUrlParser : true });
    //     console.log('Databse connected successfully');
    // }catch(error){
    //     console.log('error while connecting database',error);
    // }


    mongoose.connect("mongodb://localhost:27017/crud_db")
    .then(() => {
        console.log('mongodb connected');
    })
    .catch(() => {
        console.log('error');
    })
}

export default Connection;