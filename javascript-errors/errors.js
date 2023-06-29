// Uncaught TypeError: Assignment to constant variable.
const test = 'Hello';
test = 'GoodBye';

// Uncaught SyntaxError: Identifier 'test' has already been declared.
let test = 'GoodBye';

// Uncaught ReferenceError: Cannot access 'b' before initialization
{
    console.log(b);
    let b; // let is not hoisted
}

// Uncaught TypeError: j is not iterable
let j = { firstName: 'Ankit', lastName: 'Parmar', age: 33, GPA: 5.6 }
for (let v of j) console.log(v);