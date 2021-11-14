const name_input = document.getElementById('name');
const image_input = document.getElementById('image');
const description_input = document.getElementById('description');
const price_input = document.getElementById('price');
const number_input = document.getElementById('number');
const add_input = document.getElementById('add');
const newDay_input = document.getElementById('newDay');
const Products = document.getElementById('Products');
const BuyProducts = document.getElementById('basket');
const DayCash = document.getElementById('cash-container');


let ProductItems = [];
let Basket = [];
let cash = 0;


add_input.addEventListener("click", function AddProduct () {
const add = new Product(name_input.value, image_input.value, description_input.value, price_input.value, number_input.value);
    console.log(ProductItems);
    clearValues();
    redrawList();
});




function clearValues() {
    name_input.value = ' ';
    image_input.value = ' ';
    description_input.value = ' ';
    price_input.value = ' ';
    number_input.value = ' ';
}

function redrawList() {
    let itemsMarkup = ' ';
    ProductItems.forEach((item) => {
        itemsMarkup += item.getMarkup();
    })
    Products.innerHTML = itemsMarkup;
}


function redrawListBuy() {
    let itemsMarkup = ' ';
    Basket.forEach((item) => {
        itemsMarkup += item.getMarkup();
    })
    BuyProducts.innerHTML = itemsMarkup;
}


function deleteProducts(obj) {
    const EventId = +obj.parentElement.id;
    ProductItems = ProductItems.filter((item) => item.id !== EventId);
    redrawList();
}

function buyProducts(obj) {
    const EventId = +obj.parentElement.id;
    const TargetItem = ProductItems.find((item) => item.id === EventId );
    const container = obj.parentElement;
    container.classList.toggle('basket')
    Basket.push(TargetItem);
    redrawListBuy();

    cash = Basket.reduce((total, product) => total + +product.price, 0);
    console.log(cash);
    DayCash.innerText = 'Выручка:' + cash;

}





function Product (name, image, description, price, number) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.number = number;
    this.id = Date.now();

    ProductItems = [
        ...ProductItems,
        this,
    ];
}

newDay_input.addEventListener("click", function deleteAll() {
    ProductItems = [] ;
    redrawList();
    redrawListBuy();
});

Product.prototype.getMarkup = function () {
    return `
<div id="${this.id}" class="product-container" >
<button onclick="buyProducts(this)">Купить</button> 
<button onclick="deleteProducts(this)">Удалить</button> <br>
<p></p>
    Название: ${this.name} <br>
    Картинка: ${this.image} <br>
    Краткое описание: ${this.description} <br>
    Цена: ${this.price} <br>
    Количество: ${this.number} <br>
    Код товара: ${this.id} <br>
</div>
`;

}



