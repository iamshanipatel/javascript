// 1 for loop....
//   for(let i=1; i<=10; i++){
//      console.log("babber");
//   }

// While loop.....
// let i=1;
// while(i<=10){
//     console.log("babber")
//     i++
// }

// do-while loop....
// let i=1;
// do{
//     console.log("babber")
//     i++
// }while(i<=10);


// counting 1 to 5 number..... 
//  for(i=1; i<=6; i++){
//      console.log(i)
//  }

// while loop....
// let i=1;
// while(i<=6){
//     console.log(i)
//     i++
// }

// Do-while loop.....
// let i=1;
// do{
//     console.log(i)
//     i++
// }
// while(i<6);

// revarse counting 5 to 1.....
// for(i=5; i>0; i--){
//     console.log(i);
// }

// while loop....
// let i=5;
// while(i>0){
//     console.log(i)
//     i--
// }

// Do-loop....
// let i=5;
// do{
//     console.log(i)
//     i--;
// }
// while(i>=1);

// use brack keyword in counting number....
// for(i=1; i<=6; i++){
//     if(i == 4){
//         break;
//     }
//     else{
//         console.log(i);
//     }  
// }

//while loop...
// let i=1;
// while(i<=6){
//     if(i == 4){
//         break
//     }
//     else{
//         console.log(i)
//         i++
//     }
// }

// use continue keyword in counting number...
// for(let i=1; i<=10; i++){
//     if(i == 7){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }

// while loop....
// let i=1;
// while(i<=10){
//     console.log("inside the loop")
//     if(i == 7){
//          i++;
//        continue;
//     }
//     else{
//         console.log(i)
//         i++;
//     }
// }

// Use in string....
// let firstname = "shani"
// let lostname = 'bubber'
// // console.log(typeof(firstname))
// let name = `shani
// patel this is
// my
// name
// hello`
// console.log(name)

// new tarika string...
// let firstname = new String("shani");
// console.log(firstname);

// conctetion of String...
// let op1 = 'English '
// let op2 ='Hindi '
// let ans = op1+op2;
// console.log(ans)
//   OR
// let op1 = 'English '
// let op2 ='Hindi '
// let finalans = `${op1}${op2}`
// console.log(finalans)

//length of string
// let op1 = 'English '
// console.log(op1.length)

// toupper and tolower case ...
// let op1 = 'English '
// let op2 ='HINDI '
// console.log(op1.toUpperCase())
// console.log(op2.toLowerCase())

// let str = "bubbar";
//console.log(str.substring(2));
// console.log(str.substring(2,4))

// let sentence = "hello jee kaise ho app"
// let word = sentence.split(' ');
// console.log(word)

// let sentence = "hello jee \"kaise\" ho app";
// console.log(sentence);

 let sentence = "hello \\jee \\kaise \\ho \\app";
 let word = sentence.split('\\ ');
console.log(word);
console.log(word.join(','));