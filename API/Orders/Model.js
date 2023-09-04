const { Schema, model, Model } = require('mongoose')

const OrderSchema = new Schema(
    {
        items: {
            type: Array,
            required: true
        },
        totalBill: {
            type: String,
            required: true
        },
        customerAddress: {
            type: String,
            required: true
        },
        customerContact: {
            type: String,
            required: true
        },
        billingMehtod: {
            type: String,
            required: true
        },
        account: {
            type: String,
            required: true
        },
        customerName: {
            type: String,
            required: true
        },
        customerEmail: {
            type: String,
            required: true
        },
        order_at: {
            type: Date,
            default: Date.now
        },
        Status: {
            type: String,
            default: 'pending'
        },
        Message: {
            type: String,
            default: "Ordered Placed Successfully",
        }
    }
)

const Order = model('order', OrderSchema)
module.exports = Order