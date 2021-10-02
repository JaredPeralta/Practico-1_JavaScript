function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}


const lista1 = [
    100,
    20000,
    500,
    400000000,
    1,
    50
]


function organizarArray(lista1){
    for(let i = 0;i<=lista1.length; i++){
        for(let j = 0;j<lista1.length; j++){
            if(lista1[i]<lista1[j]){
                a=lista1[i];
                lista1[i]=lista1[j];
                lista1[j]=a;
            }
        }
    }
    console.log(lista1);
}


const mitadLista1 = parseInt(lista1.length / 2);
let mediana;

function esPar(numerito){
    if(numerito%2 === 0){
        return true;
    }else{
        return false;
    }
}

if(esPar(lista1.length)){
    organizarArray(lista1);
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
}else{
    mediana = lista1[mitadLista1];
}