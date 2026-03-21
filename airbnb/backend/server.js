import express from "express";
import "dotenv/config";
import cors from "cors";
import "colors";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import listings from "./routes/listings.js";

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.bold.underline,
    );
  } catch (err) {
    console.log("Error: ", err.message);
    process.exit(1);
  }
};
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", auth);
app.use("/api/listings", listings);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port localhost: ${PORT}`.yellow.bold);
});
