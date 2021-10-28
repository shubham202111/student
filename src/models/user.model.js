const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    student_name: {
        type: String,
        required: true
    },
    father_name: {
        type: String, 
        required: true     
    },
    dob: {
	    type:String,
        required: true

	},
    address:{
        type:String
	},
    city:{
        type:String
	},
    state:{
        type:String
	},
    pin:{
        type:String,
        required: true

	},
    phone:{
        type:Number,
        required: true

	},
    email:{
        type:String,
         unique: 1,
        required: true

	},
    marks_per:{
        type:String,
        
	},
    class:{
        type:String
    },
    enrolled_date:{ type: Date, default: new Date() },
   
});

module.exports = mongoose.model('Student', studentSchema);