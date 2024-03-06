import { LocaisEntity } from "../entities/locais.entities.js"
import { SUCESS, ERRORS } from "../shared/message.js"

export class LocalServices{
    //Create
    async criarlocal(ecoponto_name, adress_ecoponto, city_ecoponto, description_ecoponto){
        try {
            await LocaisEntity.sync()

            const novoEcoponto = await LocaisEntity.create({ecoponto_name, adress_ecoponto, city_ecoponto, description_ecoponto})
            return `Local ${SUCESS.REGISTERED_M}`
            
        } catch (error) {
            return error
        }
    }

    //Read
    async readlocal(){
        try {
            const todosLocais = await LocaisEntity.findAll({})
            return  todosLocais;
    
        } catch (error) {
            return error
        }
    }

    //Upadate
    async  atualizarlocal(id, newecoponto_name, newadress_ecoponto, newcity_ecoponto, newdescription_ecoponto){
        try { 
            const validarLocal = await LocaisEntity.findOne({where:{id}});
            
            if(!validarLocal){
                return `Local ${ERRORS.NOT_REGISTERED}`
            }

            const  localAtualizado = await LocaisEntity.update({ecoponto_name:newecoponto_name, adress_ecoponto:newadress_ecoponto,
                city_ecoponto:newcity_ecoponto, description_ecoponto:newdescription_ecoponto},{where:{id}});
            return `Local ${SUCESS.UPDATED}`
            
        } catch (error) {
            return error
        }
    }

    //Delete
    async  deletelocal(id){
        try {

            const validarLocal = await LocaisEntity.findOne({where:{id}});
            
            if(!validarLocal){
                return `Local ${ERRORS.NOT_REGISTERED}`
            }

            await LocaisEntity.destroy({where:{id}})
            return `${SUCESS.DELETE}`
            
        } catch (error) {
            return error
        }
    }
}