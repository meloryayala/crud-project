function index(req, res) {
    res.render('index', {
        title: 'Title test'
    })
}

module.exports = {
    index,
}