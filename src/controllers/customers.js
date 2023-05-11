const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'User listing'

function index(req, res) {
    res.render('register', {
        title: 'Client registration'
    })
}


async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Registration completed!'
    })
}

async function listUsers(req, res) {
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: defaultTitle,
        users,
    })
}


module.exports = {
    index,
    add,
    listUsers,

}

