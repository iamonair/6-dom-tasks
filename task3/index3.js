let body = document.body;
let newMain = document.createElement('main');
newMain.className = 'mainClass check item';
let newDiv = document.createElement('div');
newDiv.id = 'myDiv';
let newP = document.createElement('p');
newP.textContent = 'First paragraph';

body.appendChild(newMain);
newMain.appendChild(newDiv);
newDiv.appendChild(newP);