import mongoose from "mongoose";

mongoose.set('strictQuery', false);

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://miramartinez2501:2lkbFiJXnjRNRRsZ@mean.vbnbvgg.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(">> DB Connect");
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
  }