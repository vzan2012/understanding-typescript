// Classes
abstract class Department {

    // Static property
    static fiscalYear = 2021;

    // Access Modifiers
    // private readonly id: string;
    // public name: string;
    protected employees: string[] = [];

    // Shorthand Initialization 
    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    //Static
    static createEmployee(name: string) {
        return { name }
    }

    // describe(this: Department) {
    //     console.log(`Department: (${this.id}): ${this.name}`)
    // }

    abstract describe(this: Department): void


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

    describe() {
        console.log(`IT Department - ID: ${this.id}`)
    }

}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    // Getter method 
    get mostRecentReport() {
        if (this.lastReport) return this.lastReport;
        throw new Error('No Report Found...')
    }

    // Setter method 
    set mostRecentReport(value: string) {
        if (!value) throw new Error('Please pass in a valid value !!!');
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }

    static getInstance() {
        if (AccountingDepartment.instance) return this.instance;
        this.instance = new AccountingDepartment('D2', []);
        return this.instance;
    }

    describe() {
        console.log(`Accounting Department Id: ${this.id}`)
    }

    addEmployee(name: string) {
        if (name === 'vzan2012') return;
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports() {
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('User3');
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('D1', ['vzan2012']);
it.describe();

it.addEmployee('Sai Shravan');
it.addEmployee('vzan2012');

it.printEmployeeInformation()
console.log(it);

// const accounting = new AccountingDepartment('D2', []);
const accounting = AccountingDepartment.getInstance();
const accounting1 = AccountingDepartment.getInstance();

console.log(accounting, accounting1)

accounting.addReport('Report 1')
accounting.addReport('Report 2')

// Access the Setter Method 
accounting.mostRecentReport = 'Report 3';
accounting.getReports();

// Access the Getter Method 
console.log(accounting.mostRecentReport)

accounting.addEmployee('vzan2012')
accounting.addEmployee('aUser')
accounting.printEmployeeInformation()
accounting.describe();

// const accountingCopy = { name: 'Testing', describe: department.describe }
// accountingCopy.describe()