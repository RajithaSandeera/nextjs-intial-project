import { mongoose } from "mongoose";

const connectToDB = async () => {

    mongoose.connect('mongodb+srv://rsckumara28:MsrPN27fKxPLB8Du@cluster0.7lslti4.mongodb.net/')
    .then(console.log('Database connected Successfully'))
    .catch((e ) => console.log(e))
};

export default connectToDB; 