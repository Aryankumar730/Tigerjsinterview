const mongoose = require('mongoose');
import {models, model} from 'mongoose';

const dataSchema = new mongoose.Schema({
    
    First_name: {
        type: String,
        required: true
        
    },
    Last_name: {
        type: String,
        required: true,
      
    },
    Bank_Account_no: {
        type: String,
        required: true,
       
        
    },
    Bank_name: {
        type: String,
        required: true,
      
    },
    Address_1: {
        type: String,
        required: true,
      
    },
    Address_2: {
        type: String,
        
      
    },
    City: {
        type: String,
        required: true,
      
    },
    Country: {
        type: String,
        required: true,
      
    },
    Zip_code: {
        type: String,
        required: true,
      
    },
    Date:{
        type: Date,
        default: Date.now
    }
});


const Notes = models.note || model('note',dataSchema)

export default Notes