// let firstPromise = new Promise((resolve, reject) =>{
//    console.log("Babber")
//     reject(new Error("Internal Server Error"))
// })

 function seyMyName(){
     console.log("My Name is Shani")
 }
 setTimeout(seyMyName, 10000);


// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function seyMyName(){
//     console.log("My Name is Shani");
// }, 15000);
// resolve(1);
// })


let Promise1 = new Promise((resolve, reject)=>{
    let success = true
    if(success){
        resolve("Promise Fulfilled")
    }
    else{
        reject("Promis Rejected")
    }
})
