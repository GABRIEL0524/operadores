//Para entrar em um brinquedo do parque, a pessoa precisa ter altura maior ou igual 
//a 1.50m e idade maior ou igual a 12 anos. Porém, se a pessoa tiver 
//problemaCardiaco igual a true, ela não pode andar de jeito nenhum. 
var idade = 12
var altura = 1.50 
var problemaCardiaco = false

if( idade >=12 && altura >=1.50  && !problemaCardiaco == true){
    console.log("voce pode ir ao brinquedo")
} else {
    console.log("voce nao pode ir ao brinquedo")
}