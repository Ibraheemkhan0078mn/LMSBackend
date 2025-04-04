import express from 'express'
import cookieParser from 'cookie-parser'
const app = express()
import dbConnection from './db/dbConnection.js'
dbConnection()
import cors from 'cors'
import donenv from 'dotenv'
donenv.config()
import TeacherRoutes from './routes/TeacherRoutes.js'
import StudentRoutes from './routes/StudentRoutes.js'
import ProductRoutes from './routes/ProductRoutes.js'
import AdminRoutes from './routes/AdminRoutes.js'









app.use(cors({
    origin: "*", // Allows all origins (use with caution)
    credentials: true
}));



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())






















app.get("/", (req, res) => {
    res.send("The route is working properly")
})





app.use("/api/v1/AdminRoutes", AdminRoutes)
app.use("/api/v1/TeacherRoutes", TeacherRoutes)
app.use("/api/v1/StudentRoutes", StudentRoutes)
app.use("/api/v1/ProductRoutes", ProductRoutes)













// Error handling with CORS headers
app.use((err, req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://lms-frontend-gamma-ecru.vercel.app");
    res.header("Access-Control-Allow-Credentials", "true");
    res.status(500).json({ error: err.message });
});




export default app;

















