import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.router.js'

dotenv.config();

mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => {
    console.log("err is connecting to MongoDB");
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use('/api', userRouter);
app.use('/api/auth', authRouter);
