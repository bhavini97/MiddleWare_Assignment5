const express = require('express');
const router = express.Router();


router.get('/add-product',(req,res,next)=>{
    res.send(
        `<html>
            <body>
                <form action='/admin/add-product' method = 'post'>
                    Product Type:<input type="text" name ="title"></input>
                    <br><br>
                    Product Size:<input type="number" name ="size"></input>
                    <br><br>
                    <button type="submit">Add Product</button>
                </form>
            </body>
        </html>
        `
    )
    })
    router.post('/add-product',(req,res,next)=>{
        console.log(req.body)
        res.redirect('/');
    })

module.exports = router