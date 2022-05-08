const documentsConnection = require('../../database/connection')

async function listAllDocuments(){

    const sql = `select * from public.documents`

    try {

        const res = await documentsConnection.client.query(sql);
        return res.rows;

    } catch (err) {
        console.error(err);
    }
}


module.exports = {listAllDocuments}