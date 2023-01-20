//! =======================

// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делегування. Відрендерити всю розмітку через JS

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

const refs = {
  form: document.getElementById('form'),
  total: document.getElementById('total'),
  quantity: document.getElementById('quantity'),
  price: document.getElementById('price'),
  amount: document.getElementById('amount'),
};

const data = {
  price: 0,
  quantity: 0,
  calculateTotalPrice() {
    return this.price * this.quantity;
  },
};

refs.form.addEventListener('input', _.debounce(onFormChange, 250));

dataFill();

function onFormChange({ target }) {
  const { value } = target;
  if (target === refs.quantity) {
    refs.amount.textContent = value;
  }

  target.setAttribute('value', value);

  dataFill();
}

function dataFill() {
  data.price = refs.price.value;
  data.quantity = refs.quantity.value;
  displayTotalPrice();
}

function displayTotalPrice() {
  refs.total.textContent = data.calculateTotalPrice() + ' грн';
}
