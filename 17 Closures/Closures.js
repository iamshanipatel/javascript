// let name = "Manish"
// function outerFunction(){
//     let name = "Shani"; // let -> block scoped
//     function innerFunction(){
//         let name = "patel"
//         console.log(name)
//     }
//     innerFunction();
// }
// outerFunction();


function outerFunction(){
    let name = "Shani"; 
    function innerFunction(){
        console.log(name)
    }
    return innerFunction
}
let inner = outerFunction();
inner() // ya line no 20 and 21 ke sthan par, outerFunction()(); likh sakte hai