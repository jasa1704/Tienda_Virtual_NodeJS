'use strict'

const express = require('express') //lee la carpeta de node_modules e importa express
const bodyParser = require('body-parser') //se importa la libreria con express, esta libreria funciona como un middelwere, express funciona como un middelwere
// son capas que se van añadiendo y que cada vez que se realiza un peticion http va pasar por esas distintas capas
//Crear el servidor

const app = express()
const port = process.env.PORT||3000

app.use(bodyParser.urlencoded({extended:false})) //primer milddlewere
app.use(bodyParser.json()) // segundo milddlewere para poder admitir peticiones en formato json esto es comun en cualquier aplicacion de node


app.get('/api/product', (req, res)=>{ // ruta para obtener los productos
    res.send(200, {products: []}) // esto es lo que recibe el cliente 200 de ok y el producto
})

app.get('/api/product/:productId', (req, res)=>{ //ruta para obtener un producto en especifico

})

app.post('/api/product',(req, res)=>{ //ruta para enviar productos, la ruta puede tener el mismo nombre por que express diferencia por el verbo que acompaña
    console.log(req.body) // es para poder ver el cuerpo de lo que se envia
    res.status(404).send({message: 'El producto no existe'}) //como es para enviar el cliente recibe 200 ok y un mensaje
})

app.put('/api/product/:productId', (req, res)=>{ //ruta para actualizar el producto

})

app.delete('/api/product/:productId', (req, res)=>{ //ruta para borrar productos de la base de datos

})

app.listen(port, ()=>{ // arroufuncion sustituye a function() por ()=> es lo mismo
    console.log(`Tienda Virtual corriendo en http://localhost:${port}`) // para que detecte el interpolado se coloca comillas invertidas templeit de ecma6
}) //en esta parte estamos diciendo que escuche en el pueto 3000, son comandos de ECMAScript 6 