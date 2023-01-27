import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())
app.get("/", (req, res) => {
    res.json({
        message: "Trialproject Server Up"
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})