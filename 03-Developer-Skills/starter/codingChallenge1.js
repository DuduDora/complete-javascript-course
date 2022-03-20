/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK
*/

//1) Understand
// There is an array with the data of data 1 or 2
// we need to create a function that will tell the console the string above

//2)Pasos
// crear la data 1 y 2
//crear la funcion
// crear el string colocando la data de las posciiones corrrectas del arr
// tener ne cuenta que arr no sera lo mism que array 1 y aray 2
// arr es solo un parametro para que la funcion pueda leer bien lo que hara
// probar con la consola

let arrayUno = [17, 21, 23];
let arrayDos = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
    let suma = ``
    for (let i = 0; i < arr.length; i++) {
        suma += `... ${arr[i]}ºC in ${i + 1} days`;
    }
    return suma;
}

console.log(printForecast(arrayUno));
console.log(printForecast(arrayDos));
