// this programm is written randomley
// alert("hi i am muhammad zahid khan")

// let a = new Promise((resolve, reject) => {
//     let b = Math.random();
//     if(b>0.5){
//         console.log("b>3 this is number is resolve")
//         resolve("this number is resolve")
//     }else{
//         console.log("b<then 3")
//         reject("this number is rejected")
//     }
// })

// a.then((a)=>{
//    console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })


// another programm

async function getdata() {
   return  new Promise((resolve,rejected)=>{
    setTimeout(() => {
        resolve(455)
    }, 3000);
   })
}


async function main(){
console.log("the data is loading...")
let b =await  getdata()
console.log(b)
console.log("this is the first promis ")
let c = await getdata()
console.log(c)
console.log("wait..")
console.log("plz wait the data is loading...")
}



main()

