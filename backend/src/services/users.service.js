import { UsersEntity } from "../entities/users.entities.js"
import { SUCESS, ERRORS } from "../shared/message.js"

export class UsersServices{
    //Create - cria um usuario
    async criarUser(user_name, email, password){
        try {
            await UsersEntity.sync()

            await UsersEntity.create({user_name, email, password})
            return `Users ${SUCESS.REGISTERED_M}`
            
        } catch (error) {
            return error
        }
    }

    //Read - ler todos os usuarios
    async readUser(){
        try {
            const todosUsers = await UsersEntity.findAll({})
            return  todosUsers;
    
        } catch (error) {
            return error
        }
    }

    //Upadate - atualiza os usuarios
    async  atualizarUser(id, newuser_name, newemail, newpassword){
        try { 
            const validarUsers = await UsersEntity.findOne({where:{id}});
            
            if(!validarUsers){
                return `Users ${ERRORS.NOT_REGISTERED}`
            }

            await UsersEntity.update({user_name:newuser_name, email:newemail,
                password:newpassword},{where:{id}});
            return `Users ${SUCESS.UPDATED}`
            
        } catch (error) {
            return error
        }
    }

    //Delete - deleta o usuario 
    async  deleteUser(id){
        try {

            const validarUsers = await UsersEntity.findOne({where:{id}});
            
            if(!validarUsers){
                return `Users ${ERRORS.NOT_REGISTERED}`
            }

            await UsersEntity.destroy({where:{id}})
            return `${SUCESS.DELETE}`
            
        } catch (error) {
            return error
        }
    }
}