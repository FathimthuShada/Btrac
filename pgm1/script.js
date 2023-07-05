let input = document.getElementById('name');
let h1Element = document.createElement('h1');
h1Element.innerText="This is my new text created inside the new div element";
let outerDiv = document.getElementById('outerDiv');
outerDiv.append(h1Element);
console.log("Hello world");