module.exports = function toReadable (number) {
    const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const third = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return first[number];
    }
    
    if (number >= 10 && number < 20) {
        return second[number - 10];
    }
    
    if (number >= 20 && number < 100) {
        return (number % 10 == 0) ? third[number / 10 - 1] : (third[Math.floor(number / 10) - 1] + ' ' + first[number % 10]);
    } 
    
    if (number >= 100 && number < 1000){
         if (number % 100 == 0) {
            return (first[number / 100] + ' hundred');
        }
         if (number % 100 != 0) {
            return first[Math.floor(number / 100)] + ' hundred ' + toReadable(number - (Math.floor(number / 100))*100)
        }
    }
}
