/*      Casa de creditos


--> Ingresar Nombre y Apellido OK
--> Ingresar monto del Prestamo (minimo de 10.000 y un máximo de 50.000) OK
--> Elegir cuotas a pagar (6, 12 o 18) OK
--> Calcular interes OK
    -- 6 cuotas = interes de 2,6--
    -- 12 cuotas = interes de 2,4--
    -- 18 cuotas = interes de 2,3--
    
-->Validar Nombre y Apellido, Monto a retirar y cuotas.
*/

//VALIDAR NOMBRE Y APELLIDO
function validarNombre(nombre){
    if( (nombre == " ") || (nombre.length < 3 )){
        return false;
}   else {
        return true;
    }
}

function validarApellido(apellido){
    if( (apellido == " ") || (apellido.length < 3 )){
        return false;
}   else {
        return true;
    }
}
//VALIDAR MONTO
function validarMonto(monto){
    if((monto >= 10000) && ( monto <= 50000) && !isNaN(monto)){
        return true;
    }
    else{
        return false;
    }
}


do{
    nombre = prompt ("Ingresar Nombre")
    
    if( ! validarNombre (nombre)){
        alert("Nombre invalido")
    }
} 
while ( ! validarNombre( nombre ))

do{
    apellido = prompt ("Ingresar Apellido") 

    if( ! validarNombre (apellido))
    {
        alert("Apellido invalido")
    }
}
while( ! validarApellido( apellido ))

console.log( nombre + apellido)
alert("Bienvenido " + nombre + " " + apellido + ", listo para sacar un prestamo?")

 
do{
    monto = prompt ("Ingrese monto a retirar, el mínimo son $10.000 y el máximo $50.000")
    
    if( ! validarMonto ( monto )){
        alert("Monto invalido")
    }
} 
while ( ! validarMonto( monto ))

console.log("Monto a retirar " + monto)
alert("Usted va a retirar $" + monto + " pesos, a continuación seleccióne la cantidad de cuotas a pagar" )


// SELECCIONAR CUOTAS
let cuotas = prompt ("Eliga pagar su prestamo en 6, 12 o 18 cuotas") 

while ( (cuotas != 6 ) && (cuotas != 12 ) && (cuotas != 18 ) ){ 
    alert("Las cuotas elegidas son incorrectas, seleccióne una cantidad valida");

    cuotas = prompt("Eliga pagar su prestamo en 6, 12 o 18 cuotas");
} 
    console.log ( monto + " en " + cuotas)
    alert("Usted va a pagar " + monto + " en " + cuotas + " cuotas")

if( cuotas == 6){
        alert("6 cuotas con un interes de 2.6 y un valor final de " + (monto * 2.6) + " pesos")

        console.log("6 cuotas con un interes de 2.6 y un valor final de " + (monto * 2.6) + " pesos")
    }
    else if(cuotas == 12){
        
        alert("12 cuotas con un interes de 2.4 y un valor final de " + (monto * 2.4) + " pesos")

        console.log("12 cuotas con un interes de 2.4 y un valor final de " + (monto * 2.4) + " pesos")
    }
    else if(cuotas == 18){
        
        alert("18 cuotas con un interes de 2.3 y un valor final de " + (monto * 2.3) + " pesos")

        console.log("18 cuotas con un interes de 2.3 y un valor final de " + (monto * 2.3) + " pesos")    
    }
console.log("Va a retirar " + monto + " pesos en " + cuotas + " cuotas.")

