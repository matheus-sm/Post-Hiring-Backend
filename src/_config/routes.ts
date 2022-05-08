import { Router } from "express";
const routes = Router();

import documentsController from '../features/controller/documentsController';
import loginController from '../features/controller/loginController';
import sectorController from '../features/controller/sectorController';
import userController from '../features/controller/userController';

//Autenticação
//Verificação para autenticação
routes.get('/api/login/listAlllogin', loginController.listAlllogin)

//listagem de usuário
routes.get('/api/user/listAllUser', userController.listAllUser)

//listagem de documentos
routes.get('/api/documents/listAllDocuments', documentsController.listAllDocuments)

//Setores
//Listagem de setores
routes.get('/api/sector/listAllSector', sectorController.listAllSector)

//Registro de setores
routes.post('/api/sector/insertSector', sectorController.insertSector)

//Delete de setores
routes.delete('/api/sector/deleteSector/:sector_id', sectorController.deleteSector)

//Edição de setores
routes.put('/api/sector/updateSector/:sector_id', sectorController.updateSector)

export default routes;