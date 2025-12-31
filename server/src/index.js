import express from "express";
import dotenv from "dotenv";


dotenv.config(); 

const app = express();

app.get("/health", (req, res) => {
    res.send("<h1>Server is running completely fine Health is quite good</h1>");
});

app.listen(4001, () => {
    console.log("Server is running on port 4001");
});