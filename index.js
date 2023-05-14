// Here in this function input is a number and output eill be  number multiply by 3 than add 10 than divided by 2 and  substract by 5.

// problem 1


function mindGame(num) {
    if (num < 0) {
        return "plese input a positive number"
    }
    else if (typeof (num) !== "number") {
        return "plese input a number"
    }
    let result = (((num * 3) + 10) / 2) - 5;
    return result;
}

/* just for cheak */

/* const output = mindGame(10);
console.log(output);
 */

// problem-2

function evenOdd(enterString) {
    if (typeof (enterString) !== "string") {
        return "plese input a string"
    }
    const inputString = enterString.length;
    if (inputString % 2 == 0) {
        return "even"
    }
    else {
        return "odd"
    }
}


// Problem-3

// In this function input a number and then minus 7 
// ,then apply if else statement....


function isLGSeven(anyNumber) {
    if (typeof (anyNumber) !== "number") {
        return "plese input a number"
    }
    let result = anyNumber - 7;
    if (result < 7) {
        return anyNumber - 7;
    }
    else {
        return anyNumber * 2;
    }
}

// problem -4


/*In this funtion   input an arrey of numbers and 
output will be show how many negetive numbers in this array.*/


function findingBadData(arreyOfNumbers) {
    if (Array.isArray(arreyOfNumbers) === false) {
        return "please input an array"
    }
    let countNegetiveNumber = 0;
    for (let i = 0; i < arreyOfNumbers.length; i++) {
        let index = arreyOfNumbers[i];
        if (index < 0) {
            countNegetiveNumber++;
        }
    }
    return countNegetiveNumber;
}




// problem-5



/*In this funtion where i input three numbers james of three friends and output will be total of friend1*21 ,friend2*32 and friend3*43  
 and lastly if total is more than 2000 then output will be total subtraction by 2000*/




function gemsToDiamond(friend1, friend2, friend3) {
    if (friend1 == null || friend2 == null || friend3 == null) {
        return "3 numbers must provide"
    }
    else if (typeof (friend1) !== "number" || typeof (friend2) !== "number" || typeof (friend3) !== "number") {
        return "please type a number"
    }
    const convertoDimond = (friend1 * 21) + (friend2 * 32) + (friend3 * 43);
    if (convertoDimond >= 2000) {
        return convertoDimond - 2000;
    }
    else {
        return convertoDimond;
    }
        
}
