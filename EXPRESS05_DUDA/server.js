
const express = require('express')
const mysql = require('mysql2')

const mysql_config = require('./mysql_config')

const app = express()

//subir o arquivo
app.listen(3000,()=>{
    console.log("Servidor WEB em execução")
})

//criar uma conexão com o BD
const connection = mysqul.createConnection(mysql_config)

//escrever as rotas
app.get('/',(req,res)=>{
    //criar um objeto result para todos os endpoits da api
    let result = {
        status: 'sucesso',
        mesage: null,
        data: null
    }
})

//executar a conexão
    connection.query("SELECT * FROM tasks",(err, results)=>{
        if(err){
            result.status = "Erro";
            result.mesage = "Erro na obtenção das tarefas";
            result.data = [];
           //res.send(result);
           res.json(results);
        } else{
            result.status = "Sucesso"
            result.message = "Tarefa obtidas com sucesso",
            result.data = results;
            //res.send (result);
            res.json(results);
        }

    })