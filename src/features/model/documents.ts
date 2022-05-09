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

async function insertDocuments(){

    const sql = `insert`

    try {

        const res = await documentsConnection.client.query(sql);
        return res.rows;

    } catch (err) {
        console.error(err);
    }
}

async function deleteDocuments(documents_id: number){
    const sql = `delete from public.documents where documents.documents_id = $1`
    const values = [documents_id]

    try{
        const res = await documentsConnection.client.query(sql, values);
        return res.rows;
    }catch (err){
        return(err);
    }
}

async function updateDocuments(documents_id: number, value1: string, value2: string){

    const sql = `UPDATE`
    const values = [value1, value2, documents_id]

    try {

        const res = await documentsConnection.client.query(sql, values);
        return res.rows;

    } catch (err) {
        return(err);
    }
}


module.exports = {listAllDocuments, insertDocuments, deleteDocuments, updateDocuments}