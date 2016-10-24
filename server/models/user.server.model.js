var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var imageSchema = new Schema({
         id :String,
         txtSku : String,
         txtTitle : String,
         txtBrand : String,
         txtSize : String,
         txtQuantity : String,
         txtWeight : String,
         txtType : String,
         txtPrice : String,
         txtDecription : String,
         txtkeywords : String,
         ImgDetailtxtSku : String,
         ImgDetailtxtTitile : String,
         ImgDetailtxtBrand : String,
         ImgDetailtxtfile : String
},{strict:false});


mongoose.model('Product', imageSchema);