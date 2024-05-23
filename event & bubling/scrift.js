console.log("i am muhammad zahid khan")
alert("i am muhammad zahid khan")
let a = document.getElementById("btn")

// for single click "click " and for double click "dblclick"

// a.addEventListener("dblclick",()=>{
//     // alert("hi i was clicked")
//     document.querySelector(".box").innerHTML=" <b>haha  i was clicled </b> enjoy!!!"
// })
// a.addEventListener("contextmenu",()=>{
//     // alert("hi i was clicked")
//     // document.querySelector(".box").innerHTML=" <b>haha  i was clicled </b> enjoy!!!"
//     alert("plz dont right click")
// })

document.addEventListener("keydown",(e)=>{
    // alert("hi i was clicked")
    // document.querySelector(".box").innerHTML=" <b>haha  i was clicled </b> enjoy!!!"
    console.log(e ,e.keyCode,e.key)
})