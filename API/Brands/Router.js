const app = require('express')
const router = app.Router()
const{getAllBrands,getBrandByID,createBrand,updateBrand,deleteBrand} = require('./Controller')

router.get('/get-all-brands', getAllBrands)
router.get('/get-brand-by-id/:_id',getBrandByID) 
router.post('/create-brand', createBrand)
router.put('/update-brand', updateBrand)//localhost:3500/api/update-brand/64ef42f40d5d401374575ddd
router.delete('/delete-brand/:_id', deleteBrand)//localhost:3500/api/delete-brand/64ef42f40d5d401374575ddd


module.exports = router  


