import {Schema,model} from 'mongoose';
//create product schema
const productSchema=new Schema({
    //struc of resource *impt
productId:{
    type:Number,
    required:[true,"productId is required"]
},
productName:{
    type:String,
    required:[true,"product name is required"]
},
price:{
    type:Number,
    required:[true,"price is required"],
    max:[50000,"cannot exceed 50000"],
    min:[10000,"cannot be less than 10000"]

},
brand:{
    type:String,
    required:[true,"brand is required"]
},
},

{
    versionKey:false,
    timestamps:true,
},

)
//generate productmodel
export const ProductModel=model("product",productSchema)//string of singular form,