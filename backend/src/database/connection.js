import { Sequelize } from "sequelize";

const sequelize = new Sequelize('projetofinalm4', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const testConnection = () => {
    try{
        sequelize.authenticate();
        console.log("Connection bem sucedida");
    } catch (error){
        console.log(`error: ${error}`)
        console.log("Conexão mal sucessida!")
    }
}

export { sequelize, testConnection }