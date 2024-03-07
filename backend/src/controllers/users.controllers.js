import { UsersServices } from "../services/users.service.js";

const instanceUsersServices = new UsersServices();

export const registerUsers = async (req, res) => {
    const {user_name, email, password} = req.body;

    const newUsers =  await instanceUsersServices.criarUser(user_name, email, password)
    return res.status(201).json({newUsers})
}

export const getAllUsers = async (req,res)=>{
    const { } = req.body;

    const allUsers = await instanceUsersServices.readUser();
    
    return res.json({allUsers});
}

export const upadateUser = async (req, res)=>{
    const {id} = req.params
    const {newuser_name, newemail, newpassword} = req.body;

    const editedUser = await instanceUsersServices.atualizarUser(id, newuser_name, newemail, newpassword)

    return res.json({editedUser})
}

export const deleteUser = async (req,res)=>{
    const {id} = req.params;

    const deleteUser = await instanceUsersServices.deleteUser(id)

    return res.json({deleteUser});
}