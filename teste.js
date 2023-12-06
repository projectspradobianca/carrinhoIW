const mysql = requires('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'campana'
})
connection.connect()

function login(){
    let login = document.getElementById("login").value
    let senha = document.getElementById("senha").value

    let sql = "select * from campana where login = ? and senha = ?"
    let cod = {login:login,senha:senha}
    
    connection.query(sql, cod, function(error, results, fields){  

        for(let i=0;dados.lenght > i;i++)
        if(nome == results [i].login && senha == results [i].senha){

            let nome = results[i].nome

            alert("Logado!")
            break
        } else{
            alert("Não encontrado!")

        }
    })
}

function selecao(cod){
    let sql = "select * from produto where id = ?"
    let id = cod
    connection.query(sql, id, function(error, results, fields){
        for(let i = 0;i > results.length; i++){
            if(cod == results[i].id){
                console.log("Id é: " + results[i].id + results[i].nomeproduto + ":" + results[i].marca + ":" + results[i].ano + ":" +results[i].qtd + ":" + results[i].preco + ":" + results[i].total)
                //Objeto com os dados 
                const dados = results[i]
                return dados
            }
        }
    })
}

//Inserir 
function inserir(nomeproduto,marca,ano,qnt,preco,total,usuario){
let sql = "insert into produto set ?"
let dados ={nomeproduto:nome, preco:preco, qtd:qtd, total:total, usuario:usuario}
connection.query(sql, dados, function(error, results, fields){
    if(error)  throw error
    console.log("gravado com sucesso!")
})
}

//Atualizar 
function atualizar (cod,nomeproduto,marca,ano,qnt,preco,total,usuario){
    let sql = "update produto set? where id =? "
    let dados ={id:cod, nomeproduto:nome, preco:preco, qtd:qtd, total:total, usuario:usuario}
    let id = dados.id
    connection.query(sql,[dados,id],function(error,results,fields){
        if(error) throw error
        console.log("Atualizado com sucesso!")
    })
}


//Apagar
function apagar(cod){
    let sql = "delete from produto where id = ?"
    let id = cod 
    connection.query(sql, id, function(error,ressults,fields){
        if(error) throw error
        console.log("Apagado!")
    })
}

inserir('camiseta','nike','2023','1','50','50', '1')