const express = require('express')
const sequelize = require('./database')
const Products = require('./Products')
const cors = require('cors')

sequelize.sync({force:true}).then(()=>console.log("db is ready"))

const app = express()
app.use(cors())
app.use(express.json())


app.post('/products', async (req, res) => {
    //res.send("done")
    await Products.create(req.body)
    res.send("ok")
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
    product.category = req.body.category
    await product.save()
    res.send('ok');
})

app.delete('/products/:id', async (req, res)=>{
    const requestedId = req.params.id
    await Products.destroy({where:{id:requestedId}})
    res.send('ok')
})

app.listen(3001, ()=>{
    console.log("app is running")
})