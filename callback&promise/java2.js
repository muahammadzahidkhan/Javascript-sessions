// t a ="muhammad zahid khan ";
// alert("i am muhammad zahid khan")
// // console.log(a)

// const call_back=()=>{
//     console.log("i am a web developer ")
// }

// const test=(a,callback) =>{
//     call_back();
//     console.log(a);
// }

// test(a,call_back)



function loads(src,callback) {
    let scrift=document.createElement("scrift")
    scrift.src=src;
     scrift.onload=()=>callback(scrift)
        document.head.append(scrift)
     }

     loads(`www.muhammad zahid khan`,(scrift)=>{
        alert("scrift is loaded")
        alert("i am muhammad zahid khan")
     })


