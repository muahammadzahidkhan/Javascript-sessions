console.log("hi i am muhammad zahid khan ")
 async function getdata() {
 return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(455)
        // console.log(resolve)
    }, 3000);
 })
}

async function main() {
    
console.log("loading")

console.log("do somthing more")
// await function we use within asycn function
let data =  getdata()
console.log(data)

console.log("data loading")
console.log("data loading")

console.log("data loading")

}

main()

// see google for fetch API because it is very important


// jason placeholder


