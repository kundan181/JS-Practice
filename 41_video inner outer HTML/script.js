
let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

// first.innerHTML 
// first.outerHTML 
// //we can change the inner html 
// first.innerHTML = "<b>Hey I am sunny</b>"
// first.innerHTML 
// first.outerHTML = "<div>Hey I am Kundan</div>"


//from this cmd we get all the content from the site
// console.log(document.body.textContent)
//console.log(document.body.firstChild.data)
//first.hidden = false