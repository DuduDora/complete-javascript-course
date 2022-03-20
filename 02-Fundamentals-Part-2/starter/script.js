/* 
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // error
if (hasDriversLicense) console.log(`I can drive`);

//const interface = 'Auto';
const private = 534; // error
const if = 23; // error

function logger() {
    console.log(`My name is Jonas`);
}

// calling, running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


function calcAge1(birthYeah) {
    return 2022 - birthYeah;
}
const age1 = calcAge1(1997);


const calcAge2 = function (birthYeah) {
    return 2022 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2);


const calcAge3 = birthYeah => 2022 - birthYeah;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2022 - birthYeah;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, 'Brenda'));
console.log(yearsUntilRetirement(1991, 'Jonas'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces .`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYeah) {
    return 2037 - birthYeah
}


const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`Already retired`)
        return 9999;
    }
    //return retirement;
    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
//                  0           1       2
console.log(friends);

//const years = new Array(1991, 1997);

console.log(friends[0]);
// element number cero, position 0 = primera posicion
console.log(friends[2]);

console.log(friends.length);
// la longitud exacta del array (is no cero base);
console.log(friends[friends.length - 1]);
// para obtener el ultimo elemento del array
// (friends[3-1]) = friends [2]

friends[2] = 'Jay';
console.log(friends); // ['Michael', 'Steven', 'Jay']

const firstName = 'jonas'
const jonas = [firstName, 'aracelli', 1997 - 1991, friends];
console.log(jonas);

//Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah
};

const years = [1900, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
console.log(age1);

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(newLength);

friends.unshift('John');
console.log(friends);

friends.pop(); // last
const poppped = friends.pop();
console.log(poppped); //Peter
console.log(friends); //  ['John', 'Michael', 'Steven']

friends.shift(); // first
console.log(friends); // ['Michael', 'Steven']

console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

friends.push(23)
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23'))// false
console.log(friends.includes(23))// true

const jonas = {
    firstName: 'Jonas',
    lasName: 'Aracelli',
    age: 2037 - 1991,
    job: 'teacher',
    friend: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonas.lasName);
// have to use the final property name
console.log(jonas['lasName']);
// for an explicit content

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['las' + nameKey]);


const interedIn = prompt('What you wanna know about Jonas? Choose between firstName, lasName, age, job, friend');


if (jonas[interedIn]) {
    console.log(jonas[interedIn]);
} else {
    console.log('wrong. Choose between firstName, lasName, age, job, friend')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@twitter';
console.log(jonas);

//challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friend.length} friends, and his best friend is called ${jonas.friend[0]} `);

const jonas = {
    firstName: 'Jonas',
    lasName: 'Aracelli',
    birthYeah: 1991,
    job: 'teacher',
    friend: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //calcAge: function (birthYeah) {
    //   return 2037 - birthYeah
    //}
    calcAge: function () {
        return 2037 - this.birthYeah;
    },

    licencia: () => jonas.hasDriversLicense === true ? `a driver licence` : `no driver license`,
};

console.log(jonas.calcAge()); // 46
console.log(jonas.licencia())
//console.log(jonas['calcAge'](1991)); // 46

// challenge
// Jonas is a 46 year old teacher. and he has a/no driver licence

console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job}. And has ${jonas.licencia()}.`)

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    //create the value
    //            logical condition evaluated before the code is excecuted
    //                          rep = rep +1 
    console.log(`lifting weights repetition ${rep}`);
}


const jonas = [
    'Jonas',
    'Aracelli',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i])
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);


for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    // if the type of jonas element is string continue, if not skip them
    console.log(jonas[i], typeof jonas[i]);
};

for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    // if the type of jonas element is different than number, stop
    console.log(jonas[i], typeof jonas[i]);
};

const jonas = [
    'Jonas',
    'Aracelli',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weights repetition ${rep}`);
    }
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weights repetition ${rep}`);
}


let rep = 1;
while (rep <= 10) {
    console.log(`lifting weights repetition ${rep}`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is aboutto end...`);
}
*/