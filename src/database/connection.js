import { Sequelize } from "sequelize";

const sequelize = new Sequelize('projetofinalm4', '', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const testConneciton = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error){
        console.log(`error: ${error}`)
        console.log("Conexão mal sucessida!")
    }
}

export { sequelize, testConneciton }