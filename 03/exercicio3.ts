const numeros = [5, 6, 7, 8]

const tabuada = (lista: number[]) => {
    let resultados: string = '';
    for (const numero of lista ) {
        for (let i = 0;  i <= 10; i++){
            resultados+= `${numero} X ${i} = ${numero*i} \n`;

            if (i == 10){
                resultados += '------------------- \n' 
            }
        }
    }
    return resultados; 
}
 

console.log(tabuada(numeros))