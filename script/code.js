let number = [12, 18, 11, 5, 8, 2];
number.sort((a, b) => a - b);
console.log(number, );

const Mid1 = number.length/ 2;
const Mid2 = [number[Mid1 - 1], number[Mid1]];
console.log(Mid2,"Even array")


const numbers = [12, 18, 11, 5, 8];
numbers.sort((a, b) => a - b);
console.log(numbers);

function Middle(numbers) {
    const mid = Math.floor(numbers.length / 2);
    const sorted= numbers.sort((a, b) => a - b);
  
    if (numbers.length % 2 === 0) {
       return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
       return sorted[mid];
    }
 }



 console.log(Middle(numbers),"Odd Array");