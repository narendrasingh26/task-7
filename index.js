// traversing the dom //

// var itemsList=document.querySelector('#items');

// parentNode//
// console.log(itemsList.parentNode);

// parentElement//
// console.log(itemsList.parentElement);
// itemsList.parentElement.style.backgroundColor="#f4f4f4"
// console.log(itemsList.parentElement.parentElement);

// childNode//
// console.log(itemsList.childNodes);
// console.log(itemsList.children);
// firstElementchild//

// console.log(itemsList.firstElementChild);

// lastElementchild//
// console.log(itemsList.lastElementChild);

// nextElementSibling//
// console.log(itemsList.nextElementSibling);

// priviousElementSibling//
// console.log(itemsList.previousElementSibling);
// itemsList.previousElementSibling.style.color="blue"


// creatElement//

// creat a div //
var newDiv=document.createElement("div");

// add class //
newDiv.className='hello';

// add id //
newDiv.id='hellop';

// add attribute//

newDiv.setAttribute('title','hello div');

// creat a text node //

var newDivText=document.createTextNode("hello word");
// add text to div //
newDiv.appendChild(newDivText);

// insert before and after //
var container=document.querySelector('header .container');

var h1=document.querySelector('header h1');

console.log(newDiv);


container.insertBefore(newDiv,h1);




