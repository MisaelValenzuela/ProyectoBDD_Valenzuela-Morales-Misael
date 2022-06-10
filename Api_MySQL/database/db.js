import { Sequelize } from "sequelize";
const db = new Sequelize('Campeones','root','',{
    host:'localhost',
    dialect: 'mysql'
});

export default db
