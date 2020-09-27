// Classes
class Department {
    // Access Modifiers
    // private readonly id: string;
    // public name: string;
    private employees: string[] = [];

    // Shorthand Initialization 
    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department: (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    getReports() {
        console.log(this.reports)
    }
}

const it = new ITDepartment('D1', ['vzan2012']);
it.describe();

it.addEmployee('Sai Shravan');
it.addEmployee('vzan2012');

it.printEmployeeInformation()
console.log(it);

const accounting = new AccountingDepartment('D2', []);
accounting.addReport('Report 1')
accounting.addReport('Report 2')
accounting.getReports();

// const accountingCopy = { name: 'Testing', describe: department.describe }
// accountingCopy.describe()