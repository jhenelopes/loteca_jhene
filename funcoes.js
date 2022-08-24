var numEsco = []
var numSort = []



function sortNumeros() {

    for (let i = 0; i < 6; i++) {
        let num = Math.ceil(Math.random() * 60)
        console.log(num)

        if (!numSort.includes(num)) {
            numSort[i] = num;
        } else{
            i = i - 1;
        }
    }
    console.log(numSort)
}
function lerNumero( value, pos){
    if (value < 1){
        alert("O número não pode ser igual a 0 ou negativo. Digite novamente")
    } else if ( value >60){
        alert("O número não pode ser maior que 60")
    } else if ( numEsco.includes(value)){
        alert("Número repetido! Tente novamente")
    } else{
        numEsco[pos] = value
        console.log(numEsco)
    }

}
function verAcertos(){

}