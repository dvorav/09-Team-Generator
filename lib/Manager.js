// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee")

//Creates a new Manager class from employee class; adding offie number
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email,);
        this.officeNumber = officeNumber;
    }
    //Office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

//Exports Manager class
module.exports = Manager;



