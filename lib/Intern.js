// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

//Creates Intern class from Employee; Adds school
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name,id, email)
    this.school = school;
  };
  getSchool() {
      return this.school;
  };
  getRole() {
      return 'Intern';
  };
};

//Exports Intern class
module.exports = Intern;

