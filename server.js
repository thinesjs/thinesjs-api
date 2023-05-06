import createError from 'http-errors';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRouter from './routes/routers.js';
 
const app = express();
 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(cors());

app.get('/v1',function(req,res){ res.send('ThinesJS API') });
app.use("/v1/", apiRouter)
 
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
 
app.listen(3000,() => console.log('SERVER STARTED::3000'));