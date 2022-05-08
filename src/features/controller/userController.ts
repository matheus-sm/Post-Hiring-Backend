import {Request, Response} from 'express';

const userModel = require('../model/usuario')
 
export default {
    async listAllUser(request: Request, response: Response){

        const users = await userModel.listAllUser()
        response.json(users)
    }
}