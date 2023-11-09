let hText = document.querySelector('h1');
hText.style.backgroundColor = 'green';

const pText = document.querySelectorAll("#myDiv p");
pText[0].style.fontWeight = 'bold';
pText[1].style.color = 'red';
pText[2].style.textDecoration = 'underline';
pText[3].style.fontStyle = 'italic';

// let firstP = document.querySelector('div p:first-child');
// let secondP = document.querySelector('#myDiv p:nth-child(2)');
// let thirdP = document.querySelector('#myDiv p:nth-child(3)');
// let fourthP = document.querySelector('div p:last-child');

// firstP.style.fontWeight = 'bold';
// secondP.style.color = 'red';
// thirdP.style.textDecoration = 'underline';
// fourthP.style.fontStyle = 'italic';

let ulText = document.querySelectorAll('#myList li');
let listText = '';
ulText.forEach(function (item) {
    listText += item.textContent;
});
document.querySelector('#myList').textContent = listText;

let spanText = document.querySelector('span');
spanText.style.display = 'none';
// spanText.innerHTML = '';