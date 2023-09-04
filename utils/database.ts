import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set("strictQuery", true)

    if(isConnected) {
        console.log("MongoDb is already connected")
    }
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        isConnected = true
        console.log("mongoDb is already connected")
    } catch (error) {
        console.log(error)
    }
}