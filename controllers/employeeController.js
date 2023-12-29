const Employee = require("../models/employeeModel");

const getAllEmployees = async (req, res) => {
    try {
        const allEmployees = await Employee.find({});
        res.status(200).json({ allEmployees });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json({ employee });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const getEmployee = async (req, res) => {
    try {
        const employeeID = req.params.id;
        const employee = await Employee.findOne({ _id: employeeID });
        if (!employee) {
            return res.status(404).json({ msg: `No employee with id ${employeeID}` });
        }
        res.status(200).json({ employee });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const employeeID = req.params.id;
        const employee = await Employee.findOneAndUpdate(
            { _id: employeeID },
            req.body,
            { new: true, runValidators: true }
        );
        if (!employee) {
            return res.status(404).json({ msg: `No employee with id ${employeeID}` });
        }
        res.status(200).json({ employee });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const employeeID = req.params.id;
        const employee = await Employee.findOneAndDelete({ _id: employeeID });
        if (!employee) {
            return res.status(404).json({ msg: `No employee with id ${employeeID}` });
        }
        res.status(200).json({ employee });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

module.exports = {
    getAllEmployees,
    createEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
};