import express from "express";
import fileUpload from "express-fileupload"
import cors from 'cors';
import morgan from "morgan";
import empleadosRouter from './routes/empleados.routes.js'
const app = express()
/*esto es solo un comentario*/
app.use(cors())
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './uploads'
}))
app.use(morgan('dev'))
app.use('/api',empleadosRouter)
/* app.use((req,res,next)=>{
    res.status(404).json({
        message: 'Endpoint not  found'
    })
}) */

export default app;