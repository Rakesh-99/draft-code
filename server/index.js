import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
import connectDB from './config/connectDB.js';
connectDB(DB_URL);
import express from 'express';
const app = express();
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import blogRouter from './routes/blogRoute.js';
import path from 'path';
import commentRouter from './routes/commentRoute.js';





const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
app.use('/api/comment', commentRouter);

// health check route : 
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running fine!'
    });
});

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
});

app.use(errorMiddleware);




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});