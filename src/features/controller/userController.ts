import {Request, Response} from 'express';

const userModel = require('../model/usuario')
 
export default {
    async listAllUser(request: Request, response: Response){

        const users = await userModel.listAllUser()
        response.json(users)
    },

    async insertUsuarioAdm(request: Request, response: Response){
        const{
            user_name,
            birth_date,
            sector_id,
            is_supervisor,
            nickname,
            email,
            password
        } = request.body

        try{
            const [users] =  await userModel.insertUsuario(user_name, birth_date, sector_id, is_supervisor, nickname, email, password)
            const userAdm =  await userModel.insertUsuarioAdm(users.user_id)

            const retorno = {
                status: 200,
                mensagem: "Cadastro realizado com sucesso",
                userAdm: {userAdm}
            }
            response.json(retorno)
        } catch(err){
            const msg = {
                message: "Erro ao cadastrar"
            }
            response.json(msg)
        }
    },

    async insertUsuarioAssociate(request: Request, response: Response){
        const{
            
            user_name,
            birth_date,
            sector_id,
            is_supervisor,
            nickname,
            email,
            password,
            supervisor_id
        } = request.body

        try{
            const [users] =  await userModel.insertUsuario(user_name, birth_date, sector_id, is_supervisor, nickname, email, password)
            const user_associate =  await userModel.insertUsuarioAssociate(users.user_id, supervisor_id)

            const retorno = {
                status: 200,
                mensagem: "Cadastro realizado com sucesso",
                user_associate: {user_associate}
            }
            response.json(retorno)
        } catch(err){
            const msg = {
                message: "Erro ao cadastrar"
            }
            response.json(msg)
        }
    },

    async updateUsuarioAssociate(request: Request, response: Response){

        const{
            user_associate_id
        } = request.params

        const{
            supervisor_id
        } = request.body

        try{

            const users = await userModel.updateUsuarioAssociate(user_associate_id, supervisor_id)
            const retorno = {
                status: 200,
                users: users
            }
            response.json(retorno)

        } catch(err){

            const msg = {
                mensagem: "Não foi possível atualizar o Usuario",
                erro: err
            }
            response.json(msg)
        }
    },
}

