//importar el modelo
import BlogModel from "../models/BlogModel.js";
//metodos para el crud
//mostrar todos los registros
export const getAll = async (req,res) => {
    try{
        const equipos = await BlogModel.findAll()
        res.json(equipos);
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un registro
export const getEquipo = async (req,res) => {
    try {
        const equipo = await BlogModel.findAll({
            where:{Año:req.params.Año}       
        })
        res.json(equipo)
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear un registro
export const crearEquipo = async (req,res) => {
    try {
        await BlogModel.create(req.body)
        res.json({"message":"Registro creado"})
    } catch (error) {
        res.json({message: error.message})
    }
}

