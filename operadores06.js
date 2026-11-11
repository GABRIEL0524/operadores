//Um sistema de alarme deve disparar se a portaAberta for true ou se a janelaAberta 
//for true. Escreva uma estrutura de condição que exiba "Alarme Disparado!" 
//quando qualquer uma das duas estiver aberta
var portaAberta = false
var janelaAberta = true

if( portaAberta == true || janelaAberta == true ) {
    console.log("alerme disparado")
} else {
    console.log("alerme nao disparado")
}