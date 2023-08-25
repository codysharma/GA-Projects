let value = 0;

let calculator = {
    add: function(...numbers) {
        let sum = 0;
        for (number of numbers) {
            sum = number + sum;
        }
        value = sum;
        console.log(value);
    }, 
    subtraction: function(...numbers) {
        let dif = 0;
        for (number of numbers) {
            if (dif === 0) {
                dif = number;
            } else {
            dif = dif - number;
            }
        }
        value = dif;
        console.log(value);
    }, 
    multiplication: function(...numbers) {
        let product = 0;
        for (number of numbers) {
            if (product === 0) {
                product = number;
            } else {
            product = product * number;
            }
        }
        value = product;
        console.log(value);
    } ,
    division: function(...numbers) {
        let quotient = 0;
        for (number of numbers) {
            if (quotient === 0) {
                quotient = number;
            } else {
            quotient = quotient / number;
            }
        }
        value = quotient;
        console.log(value);
    } ,
    exponents: function(base, exponent) {
        let result = 0;
        result = base ** exponent;
        value = result
        console.log(result); 
    },
    convertToRad: function(degree) {
        let result = 0;
        result = degree*Math.PI/180
        console.log(result + " radians");
    }
}
