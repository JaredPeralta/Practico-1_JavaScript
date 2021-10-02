function moda(array){
    const arrayCount = {};

    array.map(
        function(elemento){
            if(arrayCount[elemento]){
                arrayCount[elemento] += 1;
            }else{
                arrayCount[elemento] = 1;
            }
        }
    );

    const arrayArray = Object.entries(arrayCount).sort(
        function (elementoA,elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = arrayArray[arrayArray.length - 1];
    return moda;
}