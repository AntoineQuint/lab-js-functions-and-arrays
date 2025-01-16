// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(nbr1, nbr2) {
    if(nbr1 > nbr2){
        return nbr1;
    } else {
        return nbr2;
    }

}
console.log(maxOfTwoNumbers(6, 8));



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let count ='';
    if(!arr.length){
        return null
    }
    for(i=0; i<arr.length; i++){
        if(arr[i].length > count.length){
            count = arr[i]
        } 
    }
    return count;
}

console.log(findLongestWord(words));


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nbr) {
    let counter = 0;
    nbr.forEach(function(nombre) {
    counter+= nombre
    });
    return counter;
}
console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAverage) {
    if (!numbersAverage.length){
        return 0;
    }
    let countavrg = 0;
    for(g =0; g<numbersAverage.length; g++){
        countavrg += numbersAverage[g];
    }
    return countavrg/numbersAverage.length;
}

console.log(averageNumbers(numbers2))



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordList, wordSearch) {
    if (!wordList.length){
        return null;
    }
    if (wordList.indexOf(wordSearch) === -1){
        return false;
    } else {
        return true
    }
}
console.log(doesWordExist(words2, "subset"));
