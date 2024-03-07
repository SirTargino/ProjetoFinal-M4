import { LocalServices } from "../services/locais.service.js";

const instanceLocalServices = new LocalServices();

export const registerLocal = async (req, res) => {
    const {ecoponto_name, adress_ecoponto, city_ecoponto, description_ecoponto} = req.body;

    const newLocal =  await instanceLocalServices.criarlocal(ecoponto_name, adress_ecoponto, city_ecoponto, 
        description_ecoponto)

    return res.status(201).json({newLocal})
}

export const getAllLocais = async  (req,res)=>{
    const { } = req.body;

    const allLocais = await instanceLocalServices.readlocal();
    
    return res.json({allLocais});
}

export const upadateLocais = async (req, res)=>{
    const {id} = req.params;
    const {newecoponto_name, newadress_ecoponto, newcity_ecoponto, newdescription_ecoponto} = req.body;

    const editedLocal = await instanceLocalServices.atualizarlocal(id, newecoponto_name, newadress_ecoponto, newcity_ecoponto, newdescription_ecoponto)

    return res.json({editedLocal})
}

export const deleteLocais = async (req,res)=>{
    const {id} = req.params;

    const deleteLocais = await instanceLocalServices.deletelocal(id)

    return res.json({deleteLocais});
}