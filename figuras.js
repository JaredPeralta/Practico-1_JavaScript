//Codigo del cuadrado
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado
}

//Codigo del triangulo
function perimetroTriangulo(lado1,lado2,lado3){
    return lado1+lado2+lado3
}

function areaTriangulo(base,altura){
    return (base*altura)/2
}

//Codigo del Circulo
function diametroCirculo(radio){
    return radio*2
} 

function perimetroCirculo(radio){
    diametro=diametroCirculo(radio)
    return diametro*Math.PI
} 

function areaCirculo(radio){
    return (radio*radio)*Math.PI
} 


//Aqui interactuamos con el html

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = parseInt(input2.value);
    const input3= document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = parseInt(input2.value);

    const area = areaTriangulo(value1,value2);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = parseInt(input.value);
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = parseInt(input.value);
    
    const area = areaCirculo(value);
    alert(area);
}