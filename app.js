import cookieParser from 'cookie-parser'
import express from 'express'
const app = express()
import dbConnection from './db/dbConnection.js'
import cors from 'cors'
import TeacherRoutes from './routes/TeacherRoutes.js'
import StudentRoutes from './routes/StudentRoutes.js'
import ProductRoutes from './routes/ProductRoutes.js'
import AdminRoutes from './routes/AdminRoutes.js'












dbConnection()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))












app.get("/", (req, res) => {
    res.send("The route is working properly")
})





app.use("/api/v1/AdminRoutes", AdminRoutes)
app.use("/api/v1/TeacherRoutes", TeacherRoutes)
app.use("/api/v1/StudentRoutes", StudentRoutes)
app.use("/api/v1/ProductRoutes", ProductRoutes)







export default app;

















