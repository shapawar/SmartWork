var express = require('express');
var router = express.Router();
var service = require('../service/apiservice');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SmartServe' });
});


router.get('/list', async (req, res, next) => {
  try {
    var list = await service.getProductList();
    res.render('list', { title: 'SmartServe', data: list });
  } catch (error) {
    next(error);
  }

});


module.exports = router;
