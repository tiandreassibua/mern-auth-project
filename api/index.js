import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js";

const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to mongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/api/users", userRoutes);

app.listen(5000, () => {
    console.log(`Server listening on port 5000`);
});
