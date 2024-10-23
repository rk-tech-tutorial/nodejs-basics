// Schema -> what data will be stored in database
const mongoose = require('mongoose');

/**
 * Name:, email, mobile, address, gender, password
 * 
 */

// Schema
const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Compulsory
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});

// Model
const SignupModel = mongoose.model('Signup', signupSchema);

module.exports = SignupModel;