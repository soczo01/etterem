const products = [
    {
        "id": 1,
        "name": "Pizza Margherita",
        "description": "Friss paradicsomszósz, mozzarella, bazsalikom.",
        "price": 1500,
        "image": "img/pizza_margherita.jpg"
      },
      {
        "id": 2,
        "name": "Húspogácsás Burger",
        "description": "Friss hús, saláta, ketchup, majonéz, egyedi fűszerek.",
        "price": 1200,
        "image": "img/burger.jpg"
      },
      {
        "id": 3,
        "name": "Spagetti Bolognese",
        "description": "Házilag készített bolognai szósz, parmezán.",
        "price": 1800,
        "image": "img/spagetti_bolognese.jpg"
      },
      {
        "id": 4,
        "name": "Hawaiian Pizza",
        "description": "Ananász, sonka, mozzarella, paradicsomszósz.",
        "price": 1600,
        "image": "img/hawaiian_pizza.jpg"
      },
      {
        "id": 5,
        "name": "Csirkés Caesar Saláta",
        "description": "Grillezett csirkehús, romaine saláta, Caesar öntet.",
        "price": 1350,
        "image": "img/caesar_salad.jpg"
      },
      {
        "id": 6,
        "name": "Lasagne",
        "description": "Tészta, darált hús, paradicsomszósz, sajt, fűszerek.",
        "price": 2200,
        "image": "img/lasagne.jpg"
      },
      {
        "id": 7,
        "name": "Sült Krumpli",
        "description": "Frissen sült ropogós krumpli, sóval.",
        "price": 500,
        "image": "img/fried_potato.jpg"
      },
      {
        "id": 8,
        "name": "Vegán Burger",
        "description": "Növényi alapú húspogácsa, vegán majonéz, saláta, szendvicskenyér.",
        "price": 1400,
        "image": "img/vegan_burger.jpg"
      },
      {
        "id": 9,
        "name": "Marhahúsos Tacos",
        "description": "Friss marhahús, saláta, avokádó, salsa, taco tálca.",
        "price": 1600,
        "image": "img/beef_tacos.jpg"
      },
      {
        "id": 10,
        "name": "Cordon Bleu",
        "description": "Panírozott csirkemell, sonka, sajt, fokhagymás mártással.",
        "price": 2500,
        "image": "img/cordon_bleu.jpg"
      },
      {
        "id": 11,
        "name": "Grillezett Lazac",
        "description": "Grillezett lazacfilé citromos vajjal és párolt zöldségekkel.",
        "price": 3500,
        "image": "img/grilled_salmon.jpg"
      },
      {
        "id": 12,
        "name": "Tiramisu",
        "description": "Krémsajt, kávé, piskóta, kakaópor.",
        "price": 1000,
        "image": "img/tiramisu.jpg"
      },
      {
        "id": 13,
        "name": "Szederes Cheesecake",
        "description": "Sajttorta friss szederrel és bogyós gyümölcsökkel.",
        "price": 1200,
        "image": "img/blackberry_cheesecake.jpg"
      },
      {
        "id": 14,
        "name": "Grillezett Zöldségek",
        "description": "Frissen grillezett zöldségek, olívaolajjal, fűszerekkel.",
        "price": 1100,
        "image": "img/grilled_vegetables.jpg"
      },
      {
        "id": 15,
        "name": "Pikáns Kínai Tészta",
        "description": "Sült tészta, zöldségek, csípős szósz, pirított szezámmag.",
        "price": 1700,
        "image": "img/spicy_chinese_noodles.jpg"
      },
      {
        "id": 16,
        "name": "Rántott Sajt",
        "description": "Frissen panírozott és sült sajt, tartármártással.",
        "price": 1200,
        "image": "img/fried_cheese.jpg"
      },
      {
        "id": 17,
        "name": "Pork Schnitzel",
        "description": "Panírozott sertésszelet, párolt káposzta, tört burgonya.",
        "price": 2500,
        "image": "img/pork_schnitzel.jpg"
      },
      {
        "id": 18,
        "name": "Gyümölcsleves",
        "description": "Friss szezonális gyümölcsök, fűszeres, édes leves.",
        "price": 850,
        "image": "img/fruit_soup.jpg"
      },
      {
        "id": 19,
        "name": "Margarita Cocktail",
        "description": "Tequila, lime, triple sec, sós peremű pohár.",
        "price": 1500,
        "image": "img/margarita_cocktail.jpg"
      },
      {
        "id": 20,
        "name": "Pina Colada",
        "description": "Rum, kókusztej, ananászlé, jeget is tartalmaz.",
        "price": 1600,
        "image": "img/pina_colada.jpg"
      }
]

class Cart {
    constructor() {
        this.items = [];
    }

    viewCart() {
        const kosarList = document.getElementById('kosarList');
        kosarList.innerHTML = '';
        this.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.product.name} x${item.quantity} - ${item.product.price * item.quantity} Ft
                <button onclick="incrementItem(${item.product.id})">+</button>
                <button onclick="decrementItem(${item.product.id})">-</button>
                <button onclick="removeItem(${item.product.id})">Töröl</button>
            `;
            kosarList.appendChild(li);
        });
        this.updateTotal();
    }

    addProduct(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        const existingItem = this.items.find(item => item.product.id === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({product, quantity});
        }
        this.viewCart();
    }

    incrementProduct(productId) {
        const existingItem = this.items.find(item => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        }
        this.viewCart();
    }

    decrementProduct(productId) {
        const existingItem = this.items.find(item => item.product.id === productId);
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity--;
        } else {
            this.removeProduct(productId);
        }
        this.viewCart();
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.viewCart();
    }

    updateTotal() {
        const totalPrice = this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
        document.getElementById('totalPrice').textContent = totalPrice;
    }

    clearCart() {
        this.items = [];
        this.viewCart();
    }
}

const myCart = new Cart();

function renderProducts() {
    const termekekDiv = document.getElementById('termekek');
    termekekDiv.innerHTML = '';

    products.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}"/>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price} Ft</p>
            <button onclick="addToCart(${item.id})">Rendelés</button>
        `;
        termekekDiv.appendChild(productDiv);
    });
}

function addToCart(productId) {
    myCart.addProduct(productId);
}

function incrementItem(productId) {
    myCart.incrementProduct(productId);
}

function decrementItem(productId) {
    myCart.decrementProduct(productId);
}

function removeItem(productId) {
    myCart.removeProduct(productId);
}

renderProducts();



  