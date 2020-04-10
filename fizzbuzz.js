function fizzbuzz(num){
    if(num % 3 == 0 && num % 5 == 0){
        return 'FIZZBUZZ'
    }
    if(num % 3 == 0){
        return 'FIZZ'
    }
    if (num % 5 == 0) {
        return 'BUZZ'    
    } 
    return num    
}

module.exports = fizzbuzz;