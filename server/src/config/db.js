import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `DB Connected Succesfully || host on ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log(error.message, "Failed to connect DB");
    process.exit(1);
  }
};

export default connectDB;
