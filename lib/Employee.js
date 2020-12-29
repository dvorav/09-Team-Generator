
class Employee {
        constructor(name, id, email) {

                this.name = name;
        
                this.id = id;
                this.email = email;
        }
        getName() {
                return this.name;
        }
        getId() {
                return this.id;
        }
        getEmail() {
                return this.email;
        }
        getRole() {
                return 'Employee';
        }
}

module.exports = Employee; 
// Will have the following properties
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() Returns 'Employee'
//Different Roles include, Manager, Intern, Engineer

// Different roles

// Using inquirer to ask questions
// Have all the employee profiles be displayed onto employee.html


  