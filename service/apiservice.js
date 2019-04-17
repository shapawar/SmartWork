
const p_model = require('../models/productionsmodel');


exports.saveJson = async (data) =>{
    try {
        var data = await p_model.insertMany(data);
        return data;
    } catch (error) {
        throw error;
    }
}


exports.getProductList = async () => {
    console.log("Inside apiservice: getProductList");
    try {
        let list = await  p_model.find().sort({popularity: -1});
        return list;
    } catch (error) {
        throw error;
    }
}



