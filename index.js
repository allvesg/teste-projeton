const express = require("express"); //importa o modulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/",function(req,res){
    res.send("</h1>Bem vindo ao meu site!</h1>");
})

app.get("/lista",function(req,res){
    res.send("<h1>Lista de Animais!</h1>");
})

app.get("/lista-vazia",function(req,res){
    res.send("<h1>Sem animais!</h1>");
})

app.get("/animais/:teste", function(req,res){
    //req -> dados enviados pelo cliente
    //res -> dados retornados pelo servidor
    res.send("retorno animal: " + req.params.teste);
})

//rota com parametro opcional
app.get("/cadastro/{:nome}", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>animal " + nome + " criado!</h1>");
    }else{
        res.send("animal criado!");
    }
    
})

   
app.listen(4000,function(erro){ //cria aplicação na porta 4000
    if(erro){
        console.log("Erro ao iniciar");
    } else{
        console.log("Servidor Iniciado");
    }
})  