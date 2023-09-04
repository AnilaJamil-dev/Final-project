const app = require('express')
const router = app.Router()
const { demoMail, addOrders, orderbyId, allOrders, updateOrder } = require('./Controller')

router.post('/send-demo-mail', demoMail)
router.post('/create-order', addOrders)
router.get('/all-orders', allOrders)
router.get('/order-by-id/:_id', orderbyId)
router.put('/update-order', updateOrder)






module.exports = router