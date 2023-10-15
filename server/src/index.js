import express from "express";
//env
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

//database
import dbconnection from "./Database/dbconnection";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({
    message: "Trialproject Server Up",
  });
});

//Routes
import User from "./Api/User";
app.use("/user", User);
//Routes
import Check from "./Api/Check";
app.use("/check", Check);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  dbconnection()
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("Database not connected", error);
    });
});
