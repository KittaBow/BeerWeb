let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('total');
let quantity = document.querySelector('quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    { 
      id: 1,
      name: `Maliwan Its not Joke`,
      description: `Maliwan`,
      price: 100,
      image: 'event2.jpeg'
    },{ 
      id: 2,
      name: `Skeleton Loard`,
      description: `Maliwan`,
      price: 200,
      image: 'Maliwan-Skeleton-Loard-small.jpg'
    },{
      id: 3,
      name: `Strawberry Cheesecake`,
      description: `Maliwan`,
      price: 300,
      image: '/media/Maliwan-Strawberry-cheesecake-small.jpg.webp'
    },{
      id: 4,
      name: `Dark Side`,
      description: `House of Benjamin`,
      price: 250,
      image:'/media/house-of-benjamin-Dark-side-small.jpg.webp'
    },{
      id: 5,
      name: `Extra Pale Ale`,
      description: `House of Lady`,
      price: 250,
      image: '/media/House-of-lady-Extra-Pale-Ale-small.jpg.webp'
    },{
      id: 6,
      name: `Berry`,
      description: `House of Lady`,
      price: 250,
      image: '/media/House-of-lady-Lady-Berry-small.jpg.webp'
    },{
      id: 7,
      name: `Nami Stout`,
      description: `Secret`,
      price: 270,
      image: '/media/Secret-Nami-stout-small.jpg.webp'
    },{
      id: 8,
      name: `Relax Hazy Dipa`,
      description: `Secret`,
      price: 270,
      image: '/media/Secret-Relax-hazy-dipa-small.jpg.webp'
    },{
      id: 9,
      name: `Freshy Berry Sour Wit`,
      description: `White Cat`,
      price: 270,
      image: '/media/White-Cat-Freshy-Berry-Sour-Wit-small.jpg.webp'
    }
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();