const loginConnection = require('../../database/connection')

async function listAlllogin(){

    const sql = `select user_name, password from public.user`

    try {

        const res = await loginConnection.client.query(sql);
        return res.rows;

    } catch (err) {
        console.error(err);
    }
}


module.exports = {listAlllogin}