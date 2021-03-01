/*Write a JavaScript program to count how many numbers and letters are there in the array.

Sample array : `var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];`

Sample Output : 8 numbers, 5 letters*/

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
}
var numbers = 0;
var letters = 0;
arr1.forEach(function(item){
    if (typeof item === 'number'){

        numbers++;
    }

    else if (typeof item === 'string'){
        letters++
    }
})