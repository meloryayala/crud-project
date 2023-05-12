const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')


//Routes
router.get('/', IndexController.index)


//Register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//Listing
router.get('/list', CustomersController.list)

//Editing
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//Remove
router.get('/remove/:id', CustomersController.remove)


module.exports = router