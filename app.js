const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
const {randomUUID} = require ('crypto');

const pessoas = [];

app.get("/pessoas",(request,response)=>{
    return response.json(pessoas);
});

app.post("/pessoas",(request,response)=>{
    const {nome, celular} = request.body;
    const pessoa = {
        nome: nome,
        celular: celular,
        id: randomUUID()
    }
    pessoas.push(pessoa);
    return response.json(pessoa);
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));