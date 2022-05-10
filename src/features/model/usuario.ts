const usuarioConnection = require('../../database/connection')

async function listAllUser(){

    const sql = `select * from public.user`

    try {

        const res = await usuarioConnection.client.query(sql);
        return res.rows;

    } catch (err) {
        console.error(err);
    }
}

async function insertUsuario(value3: string, value4: string){

    const sql = `insert `
    const values = [value3, value4]

    try {
        const res = await usuarioConnection.client.query(sql, values);
        return res.rows;
    } catch(err){
        console.error(err);
    }

}


module.exports = {listAllUser, insertUsuario}