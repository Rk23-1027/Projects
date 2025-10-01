const buttons = document.querySelectorAll("button")
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("before click", myArr);

buttons.forEach((item)=>{
    item.addEventListener("click", function(e){
        delete myArr[item.id-1]
        item.innerHTML = "<bold>X</bold>" 
        item.style.backgroundColor = "red"
    })
})





