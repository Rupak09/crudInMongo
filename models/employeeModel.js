const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    employeeCode: {
        type: String,
        required: [true, 'Employee code is required'],
        trim: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
    },
    department: {
        name: {
            type: String,
            required: [true, 'Department name is required'],
            trim: true,
        },
        hodName: {
            type: String,
            default: null,
        },
    },
    dob: {
        type: Date,
        required: [true, 'Date of Birth is required'],
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: [true, 'Gender is required'],
    },
    qualification: {
        type: String,
        trim: true,
    },
    monthlySalary: {
        type: Number,
        required: [true, 'Monthly salary is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        trim: true,
    },
    isHOD: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Employee",EmployeeSchema)
