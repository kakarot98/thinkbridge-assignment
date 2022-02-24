const express = require('express')
const sequelize = require('./database')
const Products = require('./Products')

sequelize.sync().then(()=>console.log("db is ready"))

const app = express()
app.use(express.json())


app.post('/products', async (req, res) => {
    //res.send("done")
    await Products.create(req.body)
    res.send("product is inserted")
})

app.get('/products', async (req,res) => {
    const products = await Products.findAll()
    res.send(products);
})

app.get('/products/:id', async (req, res)=> {
    const requestedId = req.params.id
    const product = await Products.findOne({where: {id: requestedId}})
    res.send(product);
})

app.put('/products/:id', async (req, res)=> {
    const requestedId = req.params.id
    const product = await Products.findOne({where: {id: requestedId}})
    product.productName = req.body.productName
    product.description = req.body.description
    product.quantity = req.body.quantity
    product.price = req.body.price
    await product.save()
    res.send(product);
})

app.delete('/products/:id', async (req, res)=>{
    const requestedId = req.params.id
    await Products.destroy({where:{id:requestedId}})
    res.send('deleted')
})

app.listen(3001, ()=>{
    console.log("app is running")
})