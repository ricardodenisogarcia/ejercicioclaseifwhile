var laLista = [];
for (     var posicion = 0 ;     posicion < 30 ;     posicion++ ){
     var random = Math.random ();
     var randommulti = random * 1000 ;
     var randomEntero = Math.floor(randommulti);
     laLista.push(randomEntero);
}

//Esta solucion la hice a partir de un libro que tengo donde explica metodos que emplean funciones
function soloParesLibro(valores){
    return valores %2 == 0;
}


function soloPares (lista){ 
    var soloLosPares = []; 
    var actual = 0;
    while (actual < lista.length){ 
        var nActual = lista[actual]; 
        if (nActual %2 ==0){
            soloLosPares.push(nActual);
        }
        actual++ 
    }
    return soloLosPares; 
}

var arrayFiltrado = soloPares(laLista)

console.log("Esta es la lista original con 30 numeros al azar" + ": " + laLista);
console.log("");
console.log("Esta es la lista filtrada con solo los numeros pares" + ": " + arrayFiltrado);
console.log("");
console.log("Esta es la lista filtrada con lo que encontre en un libro" +": " + laLista.filter(soloParesLibro));





