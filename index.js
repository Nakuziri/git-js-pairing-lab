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