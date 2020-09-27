"use strict";
// Classes
var Department = /** @class */ (function () {
    // Shorthand Initialization 
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // Access Modifiers
        // private readonly id: string;
        // public name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var department = new Department('D1', 'Accounting');
console.log(department);
department.describe();
department.addEmployee('Sai Shravan');
department.addEmployee('vzan2012');
department.printEmployeeInformation();
// const accountingCopy = { name: 'Testing', describe: department.describe }
// accountingCopy.describe()
//# sourceMappingURL=app.js.map