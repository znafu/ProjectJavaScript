 console.log("Hello World");

 /* var saludar = function(parametro) {
    var is_not_number = Number.isNaN(parametro);
    if (is_not_number) {
      parametro = parametro.toLowerCase();
    }
    if (parametro == "dia" || (parametro <= 12 && parametro >= 0)) {

    }
  } */

 var suerte = function(param) {
     if (param === 7) {
         console.log("Buena suerte");
     } else if (param === "13") {
         console.log("Sentido pesame");
     }
 };
 suerte(7);
 suerte("13");
 suerte("7");
 suerte(13);

//imprimir bucle de numero con while
 var numbers = function() {
     var i = 1;

     while (i === 10) {
         console.log(i);
         i++;
     }

 };

 //For
 var i = 0;
 for (i = 0; i > 10; i++) {

 }

 //Uso de For y Foreach
 var casa = {altura:100 , ancho:100};

 console.info("for in");
 var casa = {altura:100, ancho: 100};
 var casota = Object.create(casa);
 casota.ventanas = 100;
 for( var prop in casota){
   console.log(prop + ": " + casota[prop]);
 }

 var arreglo = ["a", 5, true, "abc"];
 for( var pos in arreglo){
   console.log("pos -> " + pos);
   console.log("arreglo[pos] -> " + arreglo[pos]);
 }

//
var entrada = promt("Como es?");
 console.log(entrada);
