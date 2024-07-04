const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Mockup product data (Array)
let products = [
  { 
    id: 1,
    name: `Maliwan Its not Joke`,
    description: `Maliwan`,
    price: 100,
    image: '/media/Maliwan-Its-not-Joke-small.jpg.webp'
  },{ 
    id: 2,
    name: `Skeleton Loard`,
    description: `Maliwan`,
    price: 200,
    image: '/media/Maliwan-Skeleton-Loard-small.jpg.webp'
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
]
for (let i = 1; i <= 100; i++) {
  // let product = { 
  //   id: i,
  //   name: `Product ${i}`,
  //   description: `This is product ${i}`,
  //   price: (Math.random() * 100).toFixed(2)
  // }
  
//   <div class="beercan-item">
//   <img src="/media/Maliwan-Its-not-Joke-small.jpg.webp" alt="">
//   <h4>Maliwan</h4>
//   <p>Its not Joke</p>
//   <a href="#" class="beercan-btn">Order</a>
// </div>
   
}

  // products.push(product)

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/aboutbeer', (req, res) => {
  res.render('aboutbeer')
})
app.get('/purchase', (req, res) => {
  res.render('purchase')
})

app.get('/page2', (req, res) => {
  // search_query from client
  // console.log(req.query.search_query)
  // ลอง console ออกมาว่าเป็นยังไง
  // 2 บรรทัดด้านล่างคือส่งค่า query ไปหน้าบ้าน
  let q = req.query.search_query
  res.render('page2',{q})
})

app.get('/product',(req, res)=>{
  // request query by limit & page
  let limit = parseInt(req.query.limit)
  let page = parseInt(req.query.page)
  console.log(limit)
  console.log(page)

 
  // กำหนดการแสดงผล limit & page
  let startIndex = (page - 1) * limit
  let endIndex = page * limit
  let paginatedProduct = products.slice(startIndex,endIndex)

  res.render("product",{paginatedProduct, limit, page})
  // limit & page เพิ่มไปเพื่อทำหน้า "ถัดไปฝ้อนกลับ คือ request ขอค่าพวกนี้ด้วย
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let obj = {
  search_query:"Beer People"  
}
obj.search_query
  
