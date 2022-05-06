import express, {Request, Response} from 'express'
const app = express()
const port = 3000
app.get("/home",async(req: Request, res: Response):Promise<any>=>{
    var mensagem = {
        "Nome": "Matheus"
    }
    res.send(mensagem)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})