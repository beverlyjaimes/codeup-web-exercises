

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

//
let threeLang = users.filter(person => person.languages.length >= 3);

console.log(threeLang);


//     Use .map to create an array of strings where each element is a user's email address

let emails = users.map(person =>  person.email);

console.log(emails);
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//
let exp = users.map(person => person.yearsOfExperience);
console.log(exp);
//
// let total = exp.reduce((a, b) => a + b, 0);
//
// console.log(total);
//
// let average = total / users.length;
//
// console.log(average);

const total = exp.reduce((accumulation , currentNumber) => {
    return accumulation + currentNumber;
} , 0);

console.log(total);

let average = total / users.length;

console.log(average);



//     Use .reduce to get the longest email from the list of users.

let longest = emails.reduce((a, b) => { return a.length > b.length ? a : b; });

console.log(longest);

// let longestEmail = emails.reduce(emails.length >  );
//
// console.log(longestEmail);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


let usersNames = users.reduce((accumulation, user) => {
    return accumulation + '' + user.name + ' '
}, "Your instructors are :");




console.log( usersNames);