// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set Timeout block")
//     },3000);
// }
// getData()

// await - ?
// fetch API


async function getData(){
    let response = fetch('http://sonplaceholder.typicode.com/todos/1');
    console.log(response)
}

// scenario;
// prepare url / api endpoint -> sync
// fetch data - > network call -> async
// Process dada