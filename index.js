//Code your solutions in this file

//Function 1 
const fiveToOneHundred = () => {
    for( let i = 5; i < 101; i += 1){
       console.log(i); 
    }
};

fiveToOneHundred();

// Function 2 
const multiplesOfThree = () => {
 for( let i =1; i < 101; i += 1) {
    if( i % 3 === 0){
        console.log(i);
    }
 } 
};

multiplesOfThree();

// Function 3

const multipleOfThreeOrFive = () => {
    for( let i =1; i < 101; i += 1) {
        if( i % 3 == 0 || i % 5 == 0){
            console.log(i);
        }
    }
};

multipleOfThreeOrFive();

//Function 4
const untilNum = (numVal) => { 
    for ( let i = 1; i < numVal + 1; i += 1) {
        console.log (i);
    }
};
untilNum(50);

//Function 5

const multiply = (num1, num2) => {
    return num1 * num2; 
}
console.log(multiply(2, 10));

// Function 6

const add = (num1, num2) => {
   if( num1 === num2){
    return (num1 + num2) * 3;
   } else {
    return num1 + num2;
   }
}; 
console.log (add (6,6));

//Function 7

const isNegative = (num) =>{
    if(num < 0){
        return true;
    } else {
        return false;
    }
};
console.log(isNegative(9));

//Function 8

const triangleArea = (num1, num2) => {
    const aot = .5 * num1 * num2; 
    return aot;
};
console.log (triangleArea(5 , 7));

//Function 9

const betweenTwentyAndForty = (num) => {
    if(num > 20 && num < 40){
        return true;
    } else{
        return false;
    }
};
console.log(betweenTwentyAndForty(20));