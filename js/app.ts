// Unknown & Never Types 
let userInput: unknown;
let userName: string;

userInput = 10;
userInput = 'vzan2012'

if (typeof userInput === 'string')
    userName = userInput

const generateError = (message: string, code: number) => {
    throw { message, errorCode: code }
    // while(true){}
}

generateError('Error Occured', 500)