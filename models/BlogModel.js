// importar conexión a base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";
const BlogModel = db.define('Equipos',{
    Año: { type: DataTypes.NUMBER},
    Pais: { type: DataTypes.STRING},
    Campeon: { type: DataTypes.STRING},
    Segundo: { type: DataTypes.STRING},
    Tercero: { type: DataTypes.STRING},
    Cuarto: { type: DataTypes.STRING},
    Goles_anotados: { type: DataTypes.NUMBER},
    Equipos_calificados: { type: DataTypes.NUMBER},
    Partidos_jugados: { type: DataTypes.NUMBER},
    Continente_campeon: { type: DataTypes.STRING},
})

export default BlogModel