let arr =[2,34,5,6,5,8]


// simple for loop
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
    
// }

// for each loop

// arr.forEach((value,index,arr)=>{
// console.log(value,index,arr)
// })

// for in loop 

// let obj={
//     a:1,
//     b:2,
//     c:3,
//     s:4,
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//            const element = obj[key];
//            console.log(element) 
//     }
// }

//     for of loop

for (const value of arr) {
 console.log(value)   
}