const logger = require("../config/logger");

class Factorial{
    calculate_recursive(number){
        if(number <= 1){
            return number;
        }
        return number * this.calculate_recursive(number - 1);
    }

    *range(start, stop, step =1 ){
        if(isNaN(stop)){
            stop = start;
            start = 0;
        }

        for (let i = start; step > 0 ? i < stop : i > stop; i += step){
            yield i;
        }
    }

    *calculate_generator(number) {
        let result = 1;
        if (number <=1 ){
            yield result;
        }

        for(let i of this.range(1, number+1)){
            result *= i;
            yield result;
        }

    }
}

module.exports = Factorial;