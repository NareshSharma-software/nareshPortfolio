import path from 'path';
import express from 'express'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import contactRoutes from './routes/contactRoutes.js';

const port = process.env.PORT || 5000;
const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/contact', contactRoutes);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(
        path.join(process.cwd(), 'frontend', 'build')
    ));

    app.get('/{*splat}', (req, res) => {
        res.sendFile(
            path.join(
                process.cwd(),
                'frontend',
                'build',
                'index.html'
            )
        );
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running');
    });
}


app.listen(port, () => {
    console.log(`server is running on ${port}`);
})