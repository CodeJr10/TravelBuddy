import connectDb from "./config/mongoDB.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
