async function sleep() {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 1000);
    })
}



// IIF function 
// (async function main() {
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//      console.log(b)
// })()



function sum(a,b,c) {
    return a+b+c
}

// DESTRUCTURING 
(async function main() {
//     // the three dot inn rest is destructuring 
//  let [x,y, ...rest] =[1,5,7,4,7,8,9]
//  console.log(x,y,rest)
let obj={
    a:1,
    b:2,
    c:3
}
// acessing the elements of obj 
let {a,b}= obj
console.log(a,b)

let arr=[1,2,4]
console.log(sum(...arr))

})()
