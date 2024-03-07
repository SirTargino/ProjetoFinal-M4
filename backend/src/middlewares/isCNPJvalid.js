import { CompanyEntity } from "../entities/company.entities.js"

export async function isCNPJvalid(cnpj){
    const findSelectedCompany = await CompanyEntity.findOne({
        where: {cnpj}
    })

    //Verifica se os dados do CNPJ existem no banco de dados.
    if(!findSelectedCompany){
        return false
    }

    return true
}