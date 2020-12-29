// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

//Use employee constructor
//Creates Engineer class from employee constructor; Adds github
class Engineer extends Employee {
  constructor(name, id, email, github) {
   super(name, id, email)
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
//Exports Engineer class
module.exports = Engineer;
