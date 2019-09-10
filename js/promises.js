//
// const wait = (number) => {
//     return new Promise((resolve) => {
//         setTimeout( () => {
//          resolve();
//         }, number);
//
//     });
//
// };

//Simplified!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-------------

// const wait = (number) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, number);
//
//     });
//
// };
//
//
// // console.log());
//
// //
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//API request using FETCH -----------------------------------------------------------------------

// fetch("https://swapi.co/api/people/1")
//     .then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch(console.log);
//



function commit (userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {"Authorization": `token ${gitToken}`}})

        .then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            if(data.push){

        console.log(data[0].created_at);
            } else {
                return false
            }
    });

}

console.log(commit("beverlyjaimes"));