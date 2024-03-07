import { CompanyEntity } from "../entities/company.entities.js";
import { isCNPJvalid } from "../middlewares/isCNPJvalid.js";
import { ERRORS, SUCESS } from "../shared/message.js";

export class CompanyService {
    //Registrar empresa - CREATE
    async registerCompany(company_name, adress, city, cnpj){
        try {
            await CompanyEntity.sync();

            // Verifica se já existe alguma empresa com o mesmo nome, e alerta o usuário sobre isso.
            const companyAlreadyExists = await CompanyEntity.findOne({
                where: {company_name}
            })


            if(companyAlreadyExists){
                return `O nome dessa empresa ${ERRORS.ALREADY_EXISTS}`
            }
            console.log("Chegou aqui")
            await CompanyEntity.create({
                company_name,
                adress,
                city,
                cnpj
            })

            return `Empresa ${SUCESS.REGISTERED_F}. Nome: ${company_name}`
        } catch (error) {
            return error
        }
    };

    //Ler todas as empresas cadastradas, mas retornando apenas o nome delas, preservando, assim informações sensíveis. - READ
    async findAllCompanies(){
        try {
            const allCompanies = await CompanyEntity.findAll({
                attributes: ['company_name']
            })

            return allCompanies
        } catch (error) {
            return error
        }
    };

    //Editar uma empresa já cadastrada previamente. - UPDATE
    async editCompany(cnpj, newName, newAdress, newCity){
        try {
            //Validação de dados

            const validCNPJ = await isCNPJvalid(cnpj);

            if(validCNPJ === false){
                return `O CNPJ inserido ${ERRORS.NOT_REGISTERED}`
            }

            await CompanyEntity.update({
                company_name: newName,
                adress: newAdress,
                city: newCity
            },{
                where: {cnpj}
            })

            return `Empresa ${SUCESS.UPDATED}! Novo nome: ${newName}`
        } catch (error) {
            return error
        }
    }

    //Exclui o registro de uma empresa no banco de dados - DELETE
    async deleteCompany(cnpj){
        try {
            //Validação de dados

            const validCNPJ = isCNPJvalid(cnpj);

            if(validCNPJ === false){
                return `O CNPJ inserido ${ERRORS.NOT_REGISTERED}`
            }

            await CompanyEntity.destroy({
                where: {cnpj}
            })

            return SUCESS.DELETE
        } catch (error) {
            return error
        }
    }
}