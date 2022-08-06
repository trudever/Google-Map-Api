const Router = require('express').Router
const router = new Router()

const temple = require('../controllers/TempleController')

router.post('/temple/addTemple', temple.add)
router.post('/temple/readTemple', temple.read)
router.get('/temple/findAll', temple.findAll)
router.put('/temple/update', temple.update)
router.delete('/temple/deleteTemple/:id', temple.delete)
router.get('/temple/getNearTemple/:lat/:lng', temple.getNearTemple)

module.exports = router