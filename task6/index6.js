// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
document.addEventListener('DOMContentLoaded', () => {
    let colorBtns = document.querySelectorAll('.color');
    let outprice = document.getElementById('outprice');
    let discountBtn = document.getElementById('discountBtn');
    discountBtn.addEventListener('click', applyDiscount);

    colorBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            changeColors(e);
        });
    });

    function changeColors(e) {
        let target = e.target;
        let activated = document.querySelector('.color.active');
        if (activated) {
            activated.classList.remove('active');
        }
        target.classList.add('active');
        let newOutprice = target.getAttribute('data-price');
        outprice.textContent = newOutprice;
    }

    function applyDiscount() {
        let discount = 10;
        let currentPrice = parseFloat(outprice.textContent);
        let discountPrice = currentPrice - (currentPrice * discount / 100);
        outprice.textContent = discountPrice;
    }
});
