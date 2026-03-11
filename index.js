import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import urlRoute from './routes/url.routes.js'
dotenv.config()

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).json({ message: " Ok" })
})
app.use('/',urlRoute)
connectDb()
const PORT = 3000
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))