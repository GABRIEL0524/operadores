//Uma loja funciona apenas de segunda a sexta-feira, no horário das 8h às 18h. Crie 
//um programa que receba o dia da semana e a hora atual (número inteiro) e informe 
//se a loja está aberta ou fechada.

var dia = "sabado"
var hora = "19"

if (dia == "domingo" || "sabado" && hora <8 || hora >18 ){
    console.log("loja esta fechada")
} else {
    console.log("loja esta aberta")}