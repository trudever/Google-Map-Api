const Router = require('express').Router;
const router = new Router();

const { controller } = require('../controllers');

router.post('/getplaces', controller.googleplace);

router.get('/getplaceimages/:size/:reference', controller.googleplaceimage);

router.get('/getNearTemple/:lat/:lng', controller.getNearTemple)

module.exports = router;
