
// Object.kays():

// let Obj={a:1,b:2,c:3,d:4,};
//     // console.log(Object.keys(obj));
//     console.log(Object.keys(Obj));

// let Obj = { name:"rajesh",
//     age:"25",
//     city:"kadapa",
//     state:"andrapradesh",
//     country:"india",
// }

// // console.log(Object.keys(Obj));
// console.log(Object.values(Obj));

// object entries:


// let Obj = { name:"rajesh",
//     age:"25",
//     city:"kadapa",
//     state:"andrapradesh",
//     country:"india",
// }

// console.log(Object.entries(Obj));

// Object.assign:


// let Obj = { name:"rajesh",
   
// }

// let Obj1 = { name:"rajesh",
//     age:"30",
//     city:"Yerraguntla",
//     state:"andrapradesh",
//     country:"india",
// }
// console.log(Object.assign(Obj,Obj1));

// // Object.assign(Obj,Obj);
// console.log(Obj);
// // console.log(Obj1);

// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:"kadapa",
//     state:"andrapradesh",
//     country:"india",
//     religin:"christ",
// }

// console.log(Object.entries(Obj));

// Object.Create : (dout)

// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:"kadapa",
//     state:"andrapradesh",
//     country:"india",
//     religin:"christ",
// }

// console.log


// Object.seal:

// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:"kadapa",
//     state:"andrapradesh",
//     country:"india",
// }
// // Object.seal(Obj);

// // Obj.hero="pawankalyan"
// // console.log(Obj);

// // Object.seal(Obj);
// // Obj.age="30";
// // console.log(Obj);

// seal-- Cont delete properties from the Object.
        //   cont add properties in to the Object.
// can update exiting properties with new values.


// Object.freeze:

// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:"kadapa",
//     state:"andrapradesh",
//     country:"india",
// }
// // Object.seal(Obj);

// // Obj.hero="pawankalyan"
// // console.log(Obj);

// Object.freeze(Obj);
// Obj.age="30";
// console.log(Obj);

// freeze;
// freeze-- Cont delete properties from the Object.
        //   cont add properties in to the Object.
// cant update exiting properties with new values.



// Object.hasOwnProperty();

// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:"kadapa",
//     state:"andrapradesh",
//     country:"india",
// }

// // Object.hasOwnPropertry(Obj);
// console.log(Obj.hasOwnProperty("gender"));



// How to itterate Objects:
// for loops:

// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:{
//         name:"hyd"
//     }

// }
// for(key in Obj){
//     console.log(key+Obj[key]);
// }

// for of loop with Object.keys():

// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:{
//         name:"hyd"
//     }

// }
// for(key of Objet.values(Obj)){
//     console.log('${key}:${Obj[key]}');
// }

// for of loop with Object.values():

// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:{
//         name:"hyd"
//     }

// }


// for(value of Object.values(Obj)){
//     console.log(value);
// }


// let Obj={
//     name:"rajesh",
//     age:"25",
//     city:{
//         name:"hyd"
//     }

// }
// for([key,value]of Object.entries(Obj)){
//     console.log([key,value]);
// }


// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.
// Example:
// let obj = { a: 1, b: 2, c: 3, d: 4 };
// let Obj= {};
// for(let i = 0; i< obj.length; i++){
//     if(object.values(obj) >2){
//         Obj += Obj[i];
//     }

    
    
// }
// console.log(Obj);
   










// TASK

// 2)

//  let obj1 = { a: 1, b: 2 };
//  let obj2 = { c: 3, d: 4 };
//  let obj3 = {}
//  obj3=Object.assign(obj1,obj2);
//  console.log(obj3);


// let obj = { a: 1, b: 2, c: 3, d: 4 };
// let sum = Object.values(obj).reduce((a,b)=>a+b, 0);
// console.log(sum);

// task 1)

// let obj = { a:1,b:2,c:3,d:4};
// let x = {}
// for(let key in obj){ 
//     if(obj[key]>2){
//         x[key]=obj[key];
//     }
    
// }
// console.log(x)

// let num = prompt("enter a number:").split("").map(Number)
// res=""
// num.sort((a,b)=>a-b)
// // console.log(num)
// for(i=num[0];i<num[num.length-1];i++){

//     if(num.includes(i)){
//     res=res+i " "
// }
// }
// console.log("Missing Numbers:" +res);


// const today = new Date();
// const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
// endYear.setFullYear(today.getFullYear()); // Set year to this year
// const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
// let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
// daysLeft = Math.round(daysLeft); // Returns days left in the year


// arr1=[1,2,3,4,5,];
// arr2=[6,7,8,9,10];
// function isSubset(a,b){
//     for (i of a){
//         if(!b.includes(i)){
//             return "arr[] is not subset of arr2[]"
//         }
//     }
//     return"arr1[] is Subset of arr 2[]"
// }
// console.log(isSubset(arr1,arr2));






// WAP to print number of pairs formed by the array of numbers

// input: 10 20 10 30 20 20

// output: 2


// let arr= [10,20, 10, 30, 20, 20];
// let pair = 0;
// for(let i = 0; i< arr.length; i++){
//     for(let j = i+1; j< arr.length; j++) {
//         if(arr[i]>=arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// // console.log(arr); [ 10, 10, 20, 20, 20, 30 ]
// for(let i = 0; i< arr.length; i++){
//     if(arr[i]===arr[i+1]){
//         pair++;
//         i++;
//     }
// }
// console.log("Number of pairs:", pair);















