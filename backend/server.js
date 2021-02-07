import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import proxyW from 'http-proxy-middleware'


// import routes
import userRoutes from './routes/userRoutes.js'
import memberRoutes from './routes/memberRoutes.js'
import postRoutes from './routes/postRoutes.js'
import settingRoutes from './routes/settingRoutes.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send("api is running...")
})

// mount routes 
app.use('/api/users', userRoutes)
app.use('/api/member-access', memberRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/settings', settingRoutes)
app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 9000

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`
    .yellow.bold)
)
