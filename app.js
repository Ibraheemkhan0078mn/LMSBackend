import express from 'express'
import cookieParser from 'cookie-parser'
const app = express()
import dbConnection from './db/dbConnection.js'
import cors from 'cors'
import donenv from 'dotenv'
donenv.config()
import TeacherRoutes from './routes/TeacherRoutes.js'
import StudentRoutes from './routes/StudentRoutes.js'
import ProductRoutes from './routes/ProductRoutes.js'
import AdminRoutes from './routes/AdminRoutes.js'












dbConnection()
app.use(express.json())



// ✅ List your frontend's deployed URL (NO TRAILING SLASH)
const allowedOrigins = [ process.env.Frontend_base_url];

const corsOptions = {
  origin: function (origin, callback) {
    console.log('Incoming request from origin:', origin);
    
    // Allow requests with no origin (e.g., Postman, mobile apps)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy violation'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));

// Handle preflight (OPTIONS) requests
app.options('*', cors(corsOptions));








app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())






















app.get("/", (req, res) => {
    res.send("The route is working properly")
})





app.use("/api/v1/AdminRoutes", AdminRoutes)
app.use("/api/v1/TeacherRoutes", TeacherRoutes)
app.use("/api/v1/StudentRoutes", StudentRoutes)
app.use("/api/v1/ProductRoutes", ProductRoutes)







export default app;

















