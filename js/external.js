// console.log("Hello from external JavaScript");
//
// // part 1------
//
// alert("Welcome to my website!");
//
// // part 2 ------
//
// var userFavoriteColor = prompt("What is your favorite color?");
// alert("Great " + userFavoriteColor + " is my favorite color too!");


// part 3 ------

// you can also convert to number by adding + instead of Number. If you want dollar sign add $ before end of string--------

// var littleMermaidDaysRented = prompt("For how many days did you rent the Little Mermaid?");
// var brotherBearDaysRented = prompt("For how many days did you rent the Brother Bear?");
// var herculesDaysRented = prompt("For how many days did you rent the Hercules?");
// var pricePerRentDayDollars = 3;
// var totalDollarsSpentRenting = ((Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * pricePerRentDayDollars) ;
//
// alert("You will have to pay a total of $" + totalDollarsSpentRenting.toFixed(2) + " dollars." ) ;

//part 3--------------
// //
// var googleHourlyPayDollars = prompt("How much does Google pay you per hour?");
// var googleHoursWorkedWeek = prompt("How many hours did you work with Google this week?");
//
// var amazonHourlyPayDollars = prompt("How much does Amazon pay you per hour?");
// var amazonHoursWorkedWeek = prompt("How many hours did you work with Amazon this week?");
//
// var facebookHourlyPayDollars = prompt("How much does Facebook pay you per hour?");
// var facebookHoursWorkedWeek = prompt("How many hours did you work with Facebook this week?");
//
// var totalGooglePaymentDollars = (Number(googleHourlyPayDollars) * (Number(googleHoursWorkedWeek)));
// var totalAmazonPaymentDollars = (Number(amazonHourlyPayDollars) * (Number(amazonHoursWorkedWeek)));
// var totalFacebookPaymentDollars = (Number(facebookHourlyPayDollars) * (Number(facebookHoursWorkedWeek)));
//
// var totalWeeklyPaymentDollars = (Number(totalGooglePaymentDollars) + (Number(totalAmazonPaymentDollars) + (Number(totalFacebookPaymentDollars))));
//
// alert("You will make a total of $" + totalWeeklyPaymentDollars.toFixed(2) + " dollars this week.");
// //
// //
// // ------------------------------------------------------------------------------------------------------------------
// alert("Lets check if we can register you for Codeup");
// var classFull = window.confirm ("Is this class full?\n (cancel=no ok=yes)");
// if (classFull) {
//     alert("Sorry, better luck next time!")
// }
// else {
//     var scheduleConflict = window.confirm ("Does this class conflict with your schedule? \n (cancel=no ok=yes)");
//     if (!classFull && !scheduleConflict) {
//         alert("You are registered for the next Codeup class!")
//     } else {
//         alert("Sorry, better luck next time!")
//     }

}
//
//
// var itemsPurchased = prompt("How many items have you purchased?");
// var statusPremium =window.confirm("Are you a Premium member?\n (cancel=no ok=yes)");
// var offerValidDate = prompt("What is the offer expiration year?");
// var applyOffer = offerValidDate >= 2019  && ( itemsPurchased >= 2 || statusPremium);
// if (applyOffer) {
//     alert("Thank you for shopping with us!")
// } else {
//     alert("Try again next time!")
// }
//
//
//
//
//
//
//
