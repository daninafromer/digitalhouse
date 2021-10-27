function polegadas(valor=0){
    return valor * 2.54;
}
console.log("O valor em centímetro é: " + polegadas(10))

function url(nome){
    return "http://www." + nome + ".com.br";
}
console.log("A sua URL é: " + url("victor"))

function string(exclam){
    return exclam + "!";
}
console.log(string("top"))

function cachorro(idade){
    return idade*7;
}
console.log(cachorro(10))

function hora(salario){
    return (salario/240);
}
console.log(hora(3000))

function imc(peso,altura){
    return peso/(altura*altura);
}
console.log(imc(100,1.75))

function maiuscula(minuscula){
    return minuscula.toUpperCase();
}
console.log(maiuscula("digital house"))

function parametro(dado){
    return typeof dado;
}
console.log(parametro(true))

function circunferencia(raio){
    return (2*Math.PI)*raio;
}
console.log(circunferencia(2))