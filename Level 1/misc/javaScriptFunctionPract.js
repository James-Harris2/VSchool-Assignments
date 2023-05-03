// const square = function(x) {
//     return x *x;
// }

// console.log(square(8));
// working on constructing Function

// const makeNoise = function() {
//     console.log("Pling!");
// };

// makeNoise();
// making function practice

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 3));
