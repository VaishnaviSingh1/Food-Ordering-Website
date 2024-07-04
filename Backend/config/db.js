import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://VaishnaviSingh:DivyaSingh1@cluster0.kimg76n.mongodb.net/food_del').then(()=>console.log("DB Connected"));

}