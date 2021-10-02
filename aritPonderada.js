const materias = [
    {
        curso : "Fisica",
        nota : 10,
        creditos : 2
    },
    {
        curso : "Programacion",
        nota : 8,
        creditos : 5
    },
    {
        curso : "Matematicas",
        nota : 7,
        creditos : 5
    },
];


function aritPonderada(materias){
    const notaPorCredito = materias.map(function(atributo){
        return atributo.nota*atributo.creditos;
    });

    const sum = notaPorCredito.reduce(function(suma = 0, atributo){
        return suma + atributo;
    });

    const creditos = materias.map(function(atributo){
        return atributo.creditos;
    });

    const sumCreditos = creditos.reduce(function(suma = 0, atributo){
        return suma + atributo;
    });

    const promedio = sum/sumCreditos;
    return promedio;
}