let dataField = document.querySelectorAll('.arr');
let submitBtn = document.querySelector('.btn');
let div = document.querySelector('.out');

submitBtn.onclick = (event) => {
  event.preventDefault();

let dataBase = [];

dataField.forEach(function (inputField) {
    const fieldName = inputField.getAttribute('data-form');
    const fieldValue = inputField.value;
    dataBase.push({ fieldName, fieldValue });
});

div.innerHTML = '';

dataBase.forEach(function (item) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `${item.fieldName}: ${item.fieldValue}`;
    div.appendChild(paragraph);
});
};