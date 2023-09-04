const app = require('express')
const router = app.Router()
const {getAllCategories, getCategoryByID, createCategory, updateCategory, deleteCategory,CategorybyName} = require('./Controller')

router.get('/get-all-categories', getAllCategories)
router.get('/categorybyname', CategorybyName)//query
router.get('/get-category-by-id/:_id',getCategoryByID)//localhost:3500/api/get-category-by-id?_id=64ca667aab35b62f50a90794
router.post('/create-category', createCategory)
router.put('/update-category', updateCategory)//http://localhost:3500/api/update-category/:64f382aca9eeba435bdbc694
router.delete('/delete-category/:_id', deleteCategory)//localhost:3500/api/delete-category/:_id


module.exports = router 

