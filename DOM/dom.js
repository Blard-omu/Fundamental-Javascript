// alert("Hey")
// Selecting DOM elements
// console.log(document);
// Selectors
// getElementsByClassName, getElementsByTagName, getElementsById, querySelector, querySelectorAll

// By id
const ul = document.getElementById('empty');
console.log(ul);

// By TagName
const para = document.getElementsByTagName('p')
console.log(para);

for(let i = 0; i < para.length; i++){
    console.log(para[i]);
}

const list = document.getElementsByTagName('li')
console.log(list);
for(let i = 0; i < list.length; i++){
    console.log(list[i].innerHTML);
}

// By className
const thirdPara = document.getElementsByClassName('third-para')
console.log(thirdPara[0]);

// By querySelector
const li = document.querySelector('li')
console.log(li.innerHTML);

const p = document.querySelector('p')
console.log(p);

const myId = document.querySelector('#empty')
console.log(myId);

// By querySelectorAll
const allPara = document.querySelectorAll('p');
console.log(allPara);

allPara.forEach(item=>console.log(item.innerHTML))

const myImg = document.querySelector('img')
// console.log(myImg.getAttribute('src'));
myImg.setAttribute('src', 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg')

li.innerHTML += `<li>This is my <b>NEW</d> content</li>`
// li.innerHTML = 'Orange'
console.log(li);

// Modifying the DOM
// document.createElement('tagName')
// document.createTextNode('Hell javascript')

// create a new element div
let div = document.createElement('div');

// add css to the div
div.className = 'my-div';
console.log(div);

// insert some content into the div
div.innerHTML = '<strong>Hello</strong> javascript'

// To show the div on our DOM
function showContent(){
    document.body.prepend(div)
    div.insertAdjacentHTML("beforeend", '<p>First items in the div</p>')
    // beforebegin, beforeend, afterbegin, afterend
}
// setTimeout(showContent, 5000)
// setTimeout(changeClass, 9000)
// setTimeout(()=>div.remove(), 15000)

function changeClass(){
    div.classList.remove('my-div')
    div.classList.add('my-div2')
}

// Javascript Events
// An event is a signal that sth happened
// click event, mouseover event, mouseout event, 
// keydown event, keyup event

// event handler
function showMsg(){
    console.log("You've clicked me!");

}
// showMsg()
const button = document.querySelector('.btn')
button.addEventListener("click", showMsg)





