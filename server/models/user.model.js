import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Provide Name"]
    },
    email : {
        type : String,
        required : [true, "Provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Provide Password"],
        minLength : [8, "Password should be 8 characters long"]
    },
    avatar : {
        type : String,
        default : ""
    },
    mobile : {
        type : Number,
        default : null
    },
    refresh_Token : {
        type : String,
        default : ""
    },
    verify_email : {
        type : Boolean,
        default: false
    },
    last_login_date : {
        type : Date,
        default : ""
    },
    status : {
        type : String,
        enum : ["Active", "Inactive", "Suspended"],
        default : "Active"
    },
    address_details : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'address'
        }
    ],
    shopping_cart : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'cartProduct'
        }
    ],
    orderHistory : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'order'
        }
    ],
    forget_password_otp :{
        type : String,
        default : null
    },
    forget_password_expiry :{
        type : Date,
        default : ""
    },
    role : {
        type : String,
        enum : ['USER', 'SELLER', 'ADMIN'],
        default : "USER"
    },

    // Seller specific
  
    store_name: {
        type: String, 
        default: null 
    },
    store_description: { 
        type: String, 
        default: null 
        
    },
    isSellerVerified: { 
        type: Boolean, 
        default: false 
        
    },
    products_listed: [{ 
        type: mongoose.Schema.ObjectId, 
        ref: 'Product' }],
}, {timestamps : true})

export const UserModel = mongoose.model("User", userSchema)