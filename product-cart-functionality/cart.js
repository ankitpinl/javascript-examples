const product = [
    {
        id: 1,
        image: 'imageaa-1.jpg',
        title: 'headphones',
        price: '20',
    },
    {
        id: 2,
        image: 'imagebb-1.jpg',
        title: 'Rode NT1 Microphone',
        price: '45'
    },
    {
        id: 3,
        image: 'imagecc-1.jpg',
        title: 'Smart Watch',
        price: '30'
    },
    {
        id: 4,
        image: 'imagedd-1.jpg',
        title: 'HP Laptop Next Generation',
        price: '70'
    },
    {
        id: 5,
        image: 'imageee-1.jpg',
        title: '250D DSLR Camera',
        price: '60',
    },
    {
        id: 6,
        image: 'imageff-1.jpg',
        title: 'Metal Disk Lamp',
        price: '35',
    },
    {
        id: 7,
        image: 'imagegg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: '55',
    },
    {
        id: 8,
        image: 'imagehh-1.jpg',
        title: 'Air pods Pro',
        price: '50',
    },
]

const categories = [...new Set(product.map((item) => { return item }))]

productsList(categories);

if (document.querySelectorAll('.search .fa-magnifying-glass').length) {

    document.querySelector('.search .fa-magnifying-glass').addEventListener('click', () => {
        const inputText = document.querySelector('.search input').value;
        const filteredProduct = categories.filter(item => (item.title.toLowerCase()).includes(inputText.toLowerCase()));
        productsList(filteredProduct)
    });

    document.querySelector('.search input').addEventListener('keyup', () => {
        const inputText = document.querySelector('.search input').value;
        console.log('inputText =>', inputText);
        if(inputText == '') {
            productsList(categories);
        }
        const filteredProduct = categories.filter(item => (item.title.toLowerCase()).includes(inputText.toLowerCase()));
        productsList(filteredProduct)
    });
}

function productsList(categories) {
    document.getElementById('root').innerHTML = categories.map((item) => {
        var { image, title, price, id } = item;
        return (
            `<div class='box'>
    
               <div class='img-box'>
                    <img class='images' src=${image} />
               </div>
    
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button onclick='addtocart(${id})'>Add to cart</button>
                </div>
    
            </div>`
        )
    
    }).join('')
}

let cart = [];
let mergeQty = [];

function addtocart(id) {
    const filteredById = categories.filter(item => item.id == id);
    cart.push(...filteredById);
    displaycart();
}

function delElement(id) {
    mergeQty = mergeQty.filter(item => item.id != id);
    cart = cart.filter(item => item.id != id);
    displaycart();
}

function displaycart() {
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "your cart is empty";

        document.querySelector('.cart p').innerHTML = 0;

        document.querySelector('#total').innerHTML = `$0.00`;


    } else {
        mergeQty = cart.reduce((acc, acu) => {
            if (acc.length) {
                const alreadyExists = acc.filter(item => item.id == acu.id);

                if (alreadyExists.length) {

                    const findIndex = acc.findIndex(item => item.id == alreadyExists[0].id);

                    if (findIndex > -1) {
                        acc[findIndex] = { id: alreadyExists[0].id, image: alreadyExists[0].image, title: alreadyExists[0].title, price: alreadyExists[0].price, qty: (alreadyExists[0].qty + 1), total: (Number(alreadyExists[0].price)*(alreadyExists[0].qty+1)) }
                    }

                } else {
                    acc.push({ ...acu, qty: 1, total: (Number(acu.price)*1) });
                }

            } else {
                acc.push({ ...acu, qty: 1, total: (Number(acu.price)*1) });
            }

            return acc;

        }, []);

        const totalQty = mergeQty.reduce(
            (accumulator, currentValue) => accumulator + currentValue.qty,
            0,
        );

        const totalPrice = mergeQty.reduce(
            (accumulator, currentValue) => Number(accumulator) + Number(currentValue.total),
            0,
        );

        document.querySelector('.cart p').innerHTML = totalQty;

        document.querySelector('#total').innerHTML = `$${totalPrice}`;

        document.getElementById("cartItem").innerHTML = mergeQty.map((item) => {
            var { image, title, price, id, qty } = item;
            return (
                `<div class='cart-item' id="box-${id}">
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px; '>$ ${price}.00</h2>
                    <h2 style='font-size: 15px; '>Qty: ${qty}</h2>
                    <i class='fa-solid fa-trash' onclick="delElement(${id})"></i>
                </div>`
            )
        }).join('');
    }
}