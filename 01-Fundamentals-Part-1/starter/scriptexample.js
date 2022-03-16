/*
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let FirstName = 'Matilda';

console.log(FirstName);
console.log(FirstName);
console.log(FirstName);

//Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1900;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Aracelli';
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 **3 es decir 2 a la exponencial de 3

const firstName = 'Jonas';
const lastName = 'Aracelli';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4 // x times equals 4
// x = x * 4 = 25 * 4 = 100
x++ // x = x + 1 = 100 + 1 = 101
x-- // x = x -1 = 101 - 1 = 100
x-- // 99
console.log(x);

console.log(ageJonas > ageSarah); // > < => =<
// asking the operator is sgejonas greater than ageSarah
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
//es lo mismo que ageJonas > a ageSarah


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
// porque primero resta y luego compara?
// js has a well defined order of operator precedence
// order of how operator are executed
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5 // x = y = 10
// de derecha a ziquireda 10 = y, y = x, entonce x = 10


console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
// usamos parentesis porque el operator precedence
// tiene a la division primero que la suma
console.log(ageJonas, ageSarah); 

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991
const year = 2037;

const jonas = " I'm " + firstName + ', a ' + (year -
    birthYear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year -
    birthYear} year old ${job}!`;

console.log(jonasNew);
console.log(`Just a regular string ...`);



const age = 15;

if (age >= 18) {
    console.log(`Sarah can star driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}


const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' - 3);
// se convirtieron en numeros
console.log('23' + '10' + 3);
// los une como strings
console.log('23' * '2');
console.log('23' / '2');


let n = '1' + 1; // '11'
n = n - 1;
console.log(n) // 10

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); //false

const money = 100;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}
//Don't spend it all

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}
// con o sin el 0, Height is undefined

const age = '18';
if (age === 18) console.log('You just became an adult .-.');

'18' === 18 // el stirng se convierte en numero y son iguales

if (age == 18) console.log('You just became an adult .-. (loose)');

const favorite = Number(prompt("What's your number"));
console.log(favorite);

if (favorite === 23) { //  == 23 ->'23' will become 23
    console.log(`Cool! 23 is an amazing number`)
} else if (favorite === 7) {
    console.log(`7 is also cool`);
} else {
    console.log(`Number is not 23 or 7`);
}


if (favorite !== 23) console.log(` why not 23`);


const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision); // false
console.log(hasDriverLicense || hasGoodVision); // true
console.log(!hasDriverLicense);


//if (hasDriverLicense && hasGoodVision) {
//    console.log(`Sarah is able to drive`)
//} else {
//    console.log(`Someone else should drive...`)
//}

const isTired = true; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive...`)
}

const day = 'saturday';

switch (day) {
    case 'monday': // busca si day es monday y ejecuta
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        break;
    case 'saturday':
    case 'sunday':
        console.log('not a valid day');
        break;
    default:
        console.log('not a valid day');
}


if (day === 'monday') {
    console.log('Plan my course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday') {
    console.log('Write code examples');
} else if (day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') { }
else if (day === 'saturday') {
    console.log('not a valid day');
} else if (day === 'sunday') {
    console.log('not a valid day');
} else {
    console.log('not a valid day');
}

3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const age = 23;
age >= 18 ? console.log('i like to drink wine') :
    console.log('i like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


// declarar la varialbe afuera para usarla adentro
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/

