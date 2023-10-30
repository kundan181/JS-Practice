
let x = function(e){
    // console.log(e.target)
    // console.log(e)
    console.log(event.type,event.clientX,event.clientY)
    // alert("Hello world1!")
}
let y = function(e){
    console.log(e)
    alert("Hello world2!")
}

btn.addEventListener('click',x)
// btn.addEventListener('click',y)


// let a = prompt("What is ur fav number = ")
// if(a == "2"){
//     btn.removeEventListnere('click',x)
// }