// this all about inserting and removing  elements and text in java.. dinamically 

let div= document.createElement("div");
div.innerHTML="i am another div and iamm also muhammad zahid khan";
div.setAttribute("class","create");
// document.querySelector(".container").append(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").replaceWith(div);
// document.querySelector(".container").prepend(div);

let a= document.querySelector(".container")
a.insertAdjacentHTML("afterend", "i am under the water and i am inserted")

