"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.getReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment('D1', ['vzan2012']);
it.describe();
it.addEmployee('Sai Shravan');
it.addEmployee('vzan2012');
it.printEmployeeInformation();
console.log(it);
var accounting = new AccountingDepartment('D2', []);
accounting.addReport('Report 1');
accounting.addReport('Report 2');
accounting.getReports();
// const accountingCopy = { name: 'Testing', describe: department.describe }
// accountingCopy.describe()
//# sourceMappingURL=app.js.map