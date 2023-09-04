const app = require('express')
const router = app.Router()

const { signup, login ,allUsers ,getUserbyEmail,updateUser,deleteUser} = require('./Controller')

router.post('/signup', signup)
router.post('/login' , login)
router.get('/getallusers',allUsers )
router.get('/userbyemail/:email',getUserbyEmail)
// router.get('/getuserbyemail',userbyEmail) // this is done using query params
router.delete('/deleteuser/:email',deleteUser)//localhost:3500/api/deleteuser/john123@gmail.com also give email in body
router.put('/updateuser/:id',updateUser)



module.exports = router
