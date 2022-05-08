import {Request, Response} from 'express';

const loginModel = require('../model/login')
 
export default {
    async listAlllogin(request: Request, response: Response){

        const login = await loginModel.listAlllogin()
        response.json(login)
    }
}