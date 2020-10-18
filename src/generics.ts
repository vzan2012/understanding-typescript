// Generics
// const names: Array<string> = ['']  // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     try {
//         setTimeout(() => {
//             resolve('Done !!!')
//         }, 2000)
//     }
//     catch (e) {
//         reject(e)
//     }
// })

// promise.then((data) => {
//     console.log(data)
// })

// Creating Generic functions 
// Merging of two objects
// Adding the constraints
function merge<O1 extends object, O2 extends object>(objA: O1, objB: O2) {
    return Object.assign(objA, objB)
}

// const mergedObj = merge({ name: 'vzan2012', hobbies: ['Coding'] }, { age: 100 })
const mergedObj = merge({ name: 'vzan2012', hobbies: ['Coding'] }, { age: 30 })

console.log(mergedObj)
console.log(mergedObj.name)
console.log(mergedObj.hobbies)
console.log(mergedObj.age)

interface lengthy {
    length: number
}

// Another Generic function 
function countAndDescribe<T extends lengthy>(element: T) {
    let describeTxt = 'No Value !!!'
    if (element.length === 1) {
        describeTxt = 'Has 1 element'
    } else if (element.length > 1) {
        describeTxt = `Has ${element.length} elements`
    }

    return [element, describeTxt]
}

console.log(countAndDescribe('Hello Sai'))
console.log(countAndDescribe(['Reading', 'Coding']))
console.log(countAndDescribe([]))

// keyOf - Constraint 
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value of ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'Sai' }, 'name'))

// Only the primitive types 
class DataStorage<T extends string | number | boolean> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1)
            return
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItem() {
        return [...this.data]
    }
}

const txtStorage = new DataStorage<string>();
txtStorage.addItem('vzan2012');
txtStorage.addItem('Sai');
txtStorage.removeItem('vzan2012')
console.log(txtStorage.getItem())

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
numberStorage.addItem(50);
console.log(numberStorage.getItem())
numberStorage.removeItem(50);
console.log(numberStorage.getItem())

// DataStorage class defined - will not work for the objects 
// const objStorage = new DataStorage<object>();
// const otherObj = { name: 'vzan2012' };
// objStorage.addItem(otherObj)
// objStorage.addItem({ name: 'Sai' })
// console.log(objStorage.getItem())
// objStorage.removeItem(otherObj)
// console.log(objStorage.getItem())

// Example of Generic Utility Types 
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date
}

const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
    // Partial type 
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal
}

// Readonly type 
const nameStore: Readonly<string[]> = ['vzan2012', 'Sai']
// nameStore.push('Star')
console.log(nameStore)
