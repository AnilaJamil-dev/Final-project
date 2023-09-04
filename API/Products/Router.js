const app = require('express')
const router = app.Router()
const{getAllProducts,getProductByID,getProductByBrand,getProductByCategory,createProduct,updateProduct,deleteProduct} = require('./Controller')

router.get('/get-all-products', getAllProducts)
router.get('/get-product-by-id/:_id',getProductByID)
router.get('/get-product-by-brand/:brand',getProductByBrand)//localhost:3500/api/get-product-by-brand?brand=Gucci
router.get('/get-product-by-category/:category', getProductByCategory)
router.post('/create-product', createProduct)
router.put('/update-product', updateProduct)//localhost:3500/api/update-product/:64e46caee09bd94831077d44
router.delete('/delete-product/:_id', deleteProduct)



module.exports = router  
