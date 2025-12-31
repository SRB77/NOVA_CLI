import express from "express";
import dotenv from "dotenv";
import { toNodeHandler , fromNodeHeaders} from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth.js";
dotenv.config(); 

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.all("/api/auth/*splat", toNodeHandler(auth)); //For ExpressJS v5 
app.use(express.json());

app.get("/api/me", async (req, res) => {
 	const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
	return res.json(session);
});
app.get("/health", (req, res) => {
    res.send("<h1>Server is running completely fine Health is quite good</h1>");
});

app.listen(4001, () => {
    console.log("Server is running on port 4001");
});