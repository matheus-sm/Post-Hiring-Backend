import {Request, Response} from 'express';

const documentsModel = require('../model/documents')
 
export default {
    async listAllDocuments(request: Request, response: Response){

        const documents = await documentsModel.listAllDocuments()
        response.json(documents)
    }
}