const Router = require('express').Router;
const router = new Router();

const { controller } = require('../controllers');

router.get('/getplaces/:start/:end', controller.googleplace);

router.get('/getplaceimages/:size/:reference', controller.googleplaceimage);

module.exports = router;
