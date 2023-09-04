const { Schema , model } =require ('mongoose')
const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    priceUnit: {
        type: String,
        required: true,
        default: "USD"
    }, 
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }

})

const Product = model('product', ProductSchema)
module.exports= Product