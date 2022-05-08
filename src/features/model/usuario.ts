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


module.exports = {listAllUser}