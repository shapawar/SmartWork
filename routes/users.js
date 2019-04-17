var express = require('express');
var router = express.Router();
var nodefetch = require('node-fetch');
const service = require('../service/apiservice');





router.post('/', async (req, res, next) => {

  console.log("inside user.js: user post");
  const response =await nodefetch('https://s3.ap-south-1.amazonaws.com/ss-local-files/products.json',{method:'GET', 'content-Type':'application/json'})
  const data =await response.json();
  const allobj = data.products;
  var arrlist = [];  
    Object.keys(allobj).forEach( async function eachKey(key) { 
      var objdata ={
        subcategory :allobj[key].subcategory,
         title :allobj[key].title, 
         price :allobj[key].price,
         popularity : allobj[key].popularity
      }
       arrlist.push(objdata);
    });

    try {
      var datasave = await service.saveJson(arrlist);
      return res.status(200).json({msg:"Data save successfully"});
    } catch (error) {
      next(error);
     // return res.status(400).json({msg:"Error when insert data"});
    }

});


router.get('/', async (req, res, next) => {
  console.log("Inside apiservice: getProductList");

  try {
    let list = await service.getProductList();
    res.status(200).json({ msg: 'Fetch listrecord successfully', data: list });
  } catch (error) {
    next(error);
    //res.status(403).json({ msg: 'Fetch list record Unsuccessfully', data: error.message });
  }

});


module.exports = router;
