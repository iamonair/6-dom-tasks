// Отримуємо доступ до списку за його id
const list = document.getElementById("list");

// Отримуємо всі діти списку
const listItems = list.getElementsByTagName("li");

// Отримуємо модальне вікно за його id
const modal = document.createElement("div");
document.body.appendChild(modal);

// Створюємо порядок виводу елементів
const order = [0, 4, 1, 3, 2];

// Функція для відображення елементів у модальному вікні
function displayItems() {
  modal.innerHTML = ""; // Очищуємо модальне вікно перед виводом

  for (let i = 0; i < order.length; i++) {
    const itemIndex = order[i];
    const item = listItems[itemIndex];
    modal.textContent += item.textContent;
    
    if (i < order.length - 1) {
      modal.textContent += ", ";
    }
  }
}

// Викликаємо функцію для відображення елементів у модальному вікні
displayItems();
