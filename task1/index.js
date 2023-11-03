const list = document.getElementById("list");

const listItems = list.getElementsByTagName("li");

const modal = document.createElement("div");
document.body.appendChild(modal);

const order = [0, 4, 1, 3, 2];

function displayItems() {
  modal.innerHTML = "";
  for (let i = 0; i < order.length; i++) {
    const itemIndex = order[i];
    const item = listItems[itemIndex];
    modal.textContent += item.textContent;
    if (i < order.length - 1) {
      modal.textContent += ", ";
    }
  }
}

displayItems();