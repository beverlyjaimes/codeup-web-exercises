function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i))
    }
}

console.log(showMultiplicationTable(7));


for (var i = 1; i >= 10; i++) {
    var randomNum = Math.for(Math.random() * 181) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is odd!");
    } else {

    } console.log(randomNum + " is even!");
}

for (var i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i))
}


for ( var k = 100; k >= 5; k -= 5) {
    console.log(k);
}