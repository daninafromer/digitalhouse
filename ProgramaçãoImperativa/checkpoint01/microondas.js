function microondas(receita,tempo){
    if(receita == 1){ //pipoca
        if(tempo>=(2*10) && (tempo<(3*10))){
            return "A comida queimou!"
        }
        else if(tempo<10){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*10)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    else if(receita == 2){ // macarrão
        if(tempo>=(2*8) && (tempo<(3*8))){
            return "A comida queimou!"
        }
        else if(tempo<8){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*8)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    else if(receita == 3){ //carne
        if(tempo>=(2*15) && (tempo<(3*15))){
            return "A comida queimou!"
        }
        else if(tempo<15){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*15)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    else if(receita == 4){//feijão
        if(tempo>=(2*12) && (tempo<(3*12))){
            return "A comida queimou!"
        }
        else if(tempo<12){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*12)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    else if(receita == 5){//brigadeiro
        if(tempo>=(2*8) && (tempo<(3*8))){
            return "A comida queimou!"
        }
        else if(tempo<8){
            return "Tempo insuficiente."
        }
        else if(tempo>=(3*8)){
            return "kabumm!"
        }
        else{
            return "Prato pronto, bom apetite!!!"
        }
    }
    else{
        console.log("Dados inválidos")
        console.log("Informe o código de uma das 5 opções de comida e o tempo que deseja deixá-la cozinhando:")
        console.log(" ")
        console.log("1 - Pipoca – 10 segundos (padrão)")
        console.log("2 - Macarrão – 8 segundos (padrão)")
        console.log("3 - Carne – 15 segundos (padrão)")
        console.log("4 - Feijão – 12 segundos (padrão)")
        console.log("5 - Brigadeiro – 8 segundos (padrão)")
        return " "
    }
}
console.log(microondas(6,24))