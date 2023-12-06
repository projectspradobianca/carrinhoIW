function login(){

    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value

    let dados = [
                    {"id":Date.now(),"nome":"Davi","senha":123},//0
                    {"id":Date.now(),"nome":"Bianca","senha":666},//1
                    {"id":Date.now(),"nome":"Cainã","senha":000}//2
                ]
for(let i=0;dados.lenght > i;i++)
    if(nome == dados [i].nome && senha == dados [i].senha){
        alert("Logado!")
        break
    } else{
        alert("Não encontrado!")

    }
    
}

function local(){
    let item = ["lucas"]

    let nomes = [["bianca", "sla", "loft"] + "," + item]

    localStorage.setItem("grupo, nomes");

    document.getElementById("demo").innerHTML = localStorage.getItem("grupo");
}