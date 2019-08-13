function multiplyByTwo(num) {


var i = 2;
while (num <= 65536) {
    console.log(num);
    num *= 2;
}
return i;
}
console.log(multiplyByTwo(2));

var allCones = Math.floor(Math.random() * 1) + 50;

var customerCones = Math.floor(Math.random(1) * 5) ;

    console.log(allCones);
    console.log(customerCones);

    do {customerCones =
    Math.floor(Math.random(1) * 5);
        if(customerCones > allCones) {
            console.log("Sorry, I can not sell you " + customerCones + " because I only have" + allCones)
        } else { console.log("I can sell you " + customerCones + " because I have " + allCones);
        allCones -= customerCones; }
} while (allCones > 0);
console.log (" Yay! I sold all the cones!");



// MAKE ANOTHER FILE!

// function showMultiplicationTable(num) {
// //     for (var i = 1; i <= 10; i++) {
// //         console.log(num + " x " + i + " = " + (num * i))
// //     }
// // }
// //
// // console.log(showMultiplicationTable(7));


// for (var i = 1; i >= 10; i++) {
//     var randomNum = Math.for(Math.random() * 181) + 20;
//     if (randomNum % 2 === 0) {
//         console.log(randomNum + " is odd!");
//     } else {
//
//     } console.log(randomNum + " is even!");
// }

// for (var i = 1; i <= 9; i++) {
//     console.log(String(i).repeat(i))
// }


// for ( var k = 100; k >= 5; k -= 5) {
//     console.log(k);
// }

// MAKE ANOTHER FILE!
//
// while (true) {
//    var num = parseInt(prompt("Give me an odd number between 0 and 50"));
//    if (num % 2 !== 0 && num > 0 && num < 51) {
//        break;
//    }
// }
//
// console.log("User entered " + num);
//
// for (var i = 1; i < 50; i+=2) {
//     if (num === i) {
//         console.log ("Whoops! skipping " + num)
//         continue;
//     }
//     console.log(i);
// }
