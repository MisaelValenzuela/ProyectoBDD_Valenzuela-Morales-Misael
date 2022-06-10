import express from "express";
import cors from "cors";
//importamos conexion a base de datos
import db from "./database/db.js";
//importamos nuestro enrutados
import blogRoutes from './routes/routes.js'
const app = express();

app.use(cors());
app.use(express.json());
app.use('/equipos', blogRoutes);

try {
    await db.authenticate();
    console.log('Conexion exitosa a MySQL')
} catch (error) {
    console.log('El error de conexion es: ${error}')
}

//app.get('/',(req,res) => {
//    res.send('Conexión a MySQL correcta')
//});

app.listen(8000, () => {
    console.log('Servidor escuchando en puerto 8000')
})

