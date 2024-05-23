let arr=[2,34,2,7,6,5]
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
//     newarr.push(element)

    
// }


let newarr=arr.map(e=>{
    return e
})
console.log(newarr)

let aa= arr.map(e=>{
    return e
})

console.log(aa)

// for filter function 

const greaterthanfive=(e)=>
{
    if(e>5){
        return true
    }
       return false
}
console.log(arr.filter(greaterthanfive))
console.log(newarr.filter(greaterthanfive))

//       OR  DIRECT IN ONE LINE 

// console.log (arr.filter((e)=>
// {
//     if(e>5){
//         return true
//     }
//        return false
// }))


// reduce methord

// let array=[2,3,4,52,3,4,]

// const red=(a ,b)=>{
//     return a+b
// }

// console.log(array.reduce(red))

// console.log(Array.from("muhammad zahid khan"))
// // console.log(Array)/

// let arr2=Array.from
// console.log(arr2)