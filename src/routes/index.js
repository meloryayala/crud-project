const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')


//Routes
router.get('/', IndexController.index)


//Register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//Listing
router.get('/list', CustomersController.listUsers)



module.exports = router