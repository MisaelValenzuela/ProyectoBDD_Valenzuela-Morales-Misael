const express = require('express');
//mongoDB
const mongoose = require('mongoose');
const america = require('./models/campeones');
const { $where } = require('./models/campeones');
require("dotenv").config();
const userRoutes = require("./routes/campeones");

const cors= require('cors');
const app = express();
const port = process.env.PORT || 8080;
//middleware
app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
//routes
app.get('/', (req,res) => {
    res.send('Bienvenido a mi API');
});
//mongodb connection
mongoose.connect('mongodb+srv://Misael:Missavamor21@cluster0.chwl8.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Conexión a MongoDB Atlas exitosa'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Servidor escuchando en el puerto', port)); 