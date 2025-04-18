let a = document.getElementById("addnewtodo")
let c  = document.getElementsByClassName("todoitem")
a.addEventListener('click',()=>{
    let b = prompt("Add new to do plssss")
    if (b && b.trim() !== "") {
    let d = document.createElement("li");
    d.textContent = b;
    document.getElementById("To do list").appendChild(d);
    }
})
//islemedi