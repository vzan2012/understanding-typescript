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
    //Static
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    // Static property
    Department.fiscalYear = 2021;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        // Getter method 
        get: function () {
            if (this.lastReport)
                return this.lastReport;
            throw new Error('No Report Found...');
        },
        // Setter method 
        set: function (value) {
            if (!value)
                throw new Error('Please pass in a valid value !!!');
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance)
            return this.instance;
        this.instance = new AccountingDepartment('D2', []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department Id: " + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'vzan2012')
            return;
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.getReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee('User3');
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment('D1', ['vzan2012']);
it.describe();
it.addEmployee('Sai Shravan');
it.addEmployee('vzan2012');
it.printEmployeeInformation();
console.log(it);
// const accounting = new AccountingDepartment('D2', []);
var accounting = AccountingDepartment.getInstance();
var accounting1 = AccountingDepartment.getInstance();
console.log(accounting, accounting1);
accounting.addReport('Report 1');
accounting.addReport('Report 2');
// Access the Setter Method 
accounting.mostRecentReport = 'Report 3';
accounting.getReports();
// Access the Getter Method 
console.log(accounting.mostRecentReport);
accounting.addEmployee('vzan2012');
accounting.addEmployee('aUser');
accounting.printEmployeeInformation();
accounting.describe();
// const accountingCopy = { name: 'Testing', describe: department.describe }
// accountingCopy.describe()
//# sourceMappingURL=app.js.map