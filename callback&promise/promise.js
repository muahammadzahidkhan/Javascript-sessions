console.log("this is promises")


// for  .catch
// let prom= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("yes done ")
//         reject("zahid khan")
//     }, 3000);
// })

// prom.catch((a)=>{
//     console.log(a)
// })


// // for then 
// let prom2= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("yes done ")
//         reject("zahid khan")
//     }, 3000);
// })

// prom2.then((a)=>{
//     console.log(a)
// })



// another example

let prom = new Promise((resolve,reject)=>{
    let z = Math.random();
    if (z<0.5){
        console.log(z)
        reject("this number is rejected")
    }else{
    setTimeout(() => {
        console.log(z)
                console.log("yes done1 ")
                resolve("zahid khan")
            }, 3000);
        }})


let prom2 = new Promise((resolve,reject)=>{
    let z = Math.random();
    if (z<0.5){
        console.log(z)
        reject("this number is rejected")
    }else{
    setTimeout(() => {
        console.log(z)
                console.log("yes done2 ")
                resolve("zahid khan")
            }, 3000);
        }})
        
// promis.all  and promise . allsettle two different methords  &promise.race
let p3 = Promise.allSettled([prom,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})



