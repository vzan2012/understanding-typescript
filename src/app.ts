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

const department = new Department('D1', 'Accounting');
console.log(department);
department.describe();

department.addEmployee('Sai Shravan');
department.addEmployee('vzan2012');

department.printEmployeeInformation()

// const accountingCopy = { name: 'Testing', describe: department.describe }
// accountingCopy.describe()