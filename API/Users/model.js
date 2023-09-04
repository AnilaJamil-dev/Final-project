const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    profilepicture: {
        type: String,
        default: "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
    },
    joining: {
        type: Date,
        default: Date.now() // current date and time when a document is created in the database
    }
})

const user = model('user', userSchema)
module.exports = user