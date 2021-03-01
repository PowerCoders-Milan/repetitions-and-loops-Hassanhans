// write your code below
var num2 = 9;
for (var x = 0; x <= 10; x++) {
    console.log(x*num2);
}


for (var x = 0; x <= 10; x++) {
    var result = num2 * x;
    console.log(num2 + ' * ' + x + ' = ' + result);
}


function num1 (xy){
    for (var x = 1; x <= 10; x++) {
        console.log(xy + ' * ' + x + ' = '+ xy*x);
}}
num1(2)