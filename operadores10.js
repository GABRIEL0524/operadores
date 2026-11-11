//Uma loja online oferece frete grátis se o valorCompra for maior que R$ 100 ou se o 
//cliente for membroVIP. No entanto, o frete grátis não se aplica se a entrega for para 
//zonaRural. Crie o programa que retorne se o cliente tem direito ao frete grátis. 

var valorCompra = 100
var membroVIP = false
var zonaRural = true

if((valorCompra >=100 || membroVIP == true) && !zonaRural ==true) {
    console.log("frete gratis")
} else {
    console.log("frete pago")
}