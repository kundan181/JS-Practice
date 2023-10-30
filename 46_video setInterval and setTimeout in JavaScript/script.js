document.write("hello")
const sum=(a,b) =>{
    console.log("Yes i am running"+(a+b))
}

setTimeout(sum,1000,1,2)



let a = setTimeout(function(){
    alert("I am inside of settimeout")
},3000)

let b = prompt("Do ypu want to run the settimeout?")
if("n" == b)
{
    clearTimeout(a)
}
console.log(a)