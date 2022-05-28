import {Request, Response} from 'express';

const sectorModel = require('../model/sector')
 
export default {
    async listAllSector(request: Request, response: Response){

        const sector: [] = await sectorModel.listAllSector()
        response.send(sector)
    },

    async insertSector(request: Request, response: Response){
        const{
            sector_name,
            description
        } = request.body.data
        console.log(request.body.data);
        try{
            const sector =  await sectorModel.insertSector(sector_name, description)

            const sector_response = {
                success: true,
                status: 200,
                message: "Cadastro realizado com sucesso",
                sector: {sector}
            }
            response.json(sector_response)
        } catch(err){
            const sector_response = {
                
                success: false,
                message: "Erro ao cadastrar"
            }
            response.json(sector_response)
        }
    },

    async deleteSector(request: Request, response: Response){
        const{
            sector_id
        } = request.params
        try{
            const sector = await sectorModel.deleteSector(sector_id)
            const retorno = {
                status: 200,
                mensagem: "Setor Deletado",
                sector: sector
            }
            response.json(retorno)
        } catch(err){
            const msg = {
                mensagem: "Não foi possível deletar o setor",
                erro: err
            }  
            response.json(msg)
        }
    },

    async updateSector(request: Request, response: Response){

        const{
            sector_id
        } = request.params

        const{
            sector_name,
            description
        } = request.body

        try{

            const sector = await sectorModel.updateSector(sector_id, sector_name, description)
            const retorno = {
                status: 200,
                sector: sector
            }
            response.json(retorno)

        } catch(err){

            const msg = {
                mensagem: "Não foi possível atualizar o setor",
                erro: err
            }
            response.json(msg)
        }
    },
}

