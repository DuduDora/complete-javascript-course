// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
//calculate the temperature amplitude.Keep in mind that sometimes there is  a sensor error
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 14, 147, 9, 5]
// 1) Understading the problem
//what is temp amplittude? difference between highest and lowest temperature
// How to compute the max and min?
// what is a sennsor error? and what to do when it occurs?


//2)Breaking up into sub-problems
// How to ignore errors
//finn max value in temp aray
// find min value in temp aray
// subtract min from max amplitute and return it
const calcTempAmplitude = function (temps) {
    let maximo = temps[0];
    let min = temps[0]
    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;

        if (temps[i] > maximo) maximo = temps[i];
        if (temps[i] < min) min = temps[i];
    }
    console.log(maximo, min)
    return maximo - min
}
console.log(calcTempAmplitude(temperatures));


// problem 2:
//function should recieve 2 arrays of temps

//1) With 2 arrays should we implement functionality twice? no. jhust merge the two arrys

//2) merge 2 arrays. how?
const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
}

console.log(calcTempAmplitudeNew([3, 5, 1], [9, 0]));
*/

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'cels',

        //C: fix
        value: Number(prompt(`Degrees celsius:`))
        // promt returns always a string
    };
    // B find
    //console.log(measurement);
    console.table(measurement);

    //console.log(measurement.value);
    //console.warn(measurement.value);
    //console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
}
// A identify
console.log(measureKelvin());