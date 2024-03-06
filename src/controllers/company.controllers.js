import { CompanyService } from "../services/company.service.js";

const instanceCompanyService = new CompanyService();

export const registerCompany = async (req,res)=>{
    const {company_name, adress, city, cnpj} = req.body;

    const newCompany = await instanceCompanyService.registerCompany(company_name, adress, city, cnpj);

    return res.status(201).json({newCompany})
}

export const getAllCompanies = async (req,res)=>{
    const { } = req.body;

    const allCompanies = await instanceCompanyService.findAllCompanies();

    return res.json({allCompanies})
}

export const updateCompany = async (req,res)=>{
    const {cnpj, newName, newAdress, newCity} = req.body;

    const editedCompany = await instanceCompanyService.editCompany(cnpj, newName, newAdress, newCity)

    return res.json({editedCompany})
}

export const deleteCompany = async (req,res)=>{
    const {cnpj} = req.body;

    const deleteCompany = await instanceCompanyService.deleteCompany(cnpj)

    return res.json({deleteCompany})
}