import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import dbconnection from './Form/Database/dbconnection';

const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.json({
        message: "Trialproject Server Up"
    })
})

//Routes
import User from "./Form/Api/User"
app.use("/user", User)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    dbconnection()
        .then(() => {
            console.log("Database connected")

        })
        .catch((error) => {
            console.log("Database not connected", error)

        })
})