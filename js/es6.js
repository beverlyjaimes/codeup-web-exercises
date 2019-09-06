/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'bev';
const email = 'bev@email.com';
const languages = ['css', 'js'];

// name = 'bev';
//will not work

// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

users.push({
  name,
  email,
  languages
});

console.log(users);

// node js/es6.js
// // TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];


// console.log(emails);
// console.log(names);

// // TODO: rewrite the following using arrow functions
users.forEach(user => emails.push(user.email));
users.forEach(user => names.push(user.name));

//
// // TODO: replace `var` with `let` in the following declaration
let developers = [];

users.forEach((user) => {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  // const users ={
  //   name: name,
  //   email : email,
  //   languages: languages
  // };

  const {name, email, languages} = user;
  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

  developers.push(`${name} 's email is ${email} ${name} knows ${languages.join(',')}`);

});

// console.log(developers);

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {


  // TODO: rewrite the assignment below to use template strings

// });






for (let user of users) {
  list += `<li> ${developer} </li>`;
}

list += '</ul>';

console.log(list)