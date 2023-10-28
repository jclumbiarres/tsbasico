import Todo from './lib';
const todo = new Todo('Arreglar tsconfig.json y package.json');
console.log(todo.completed); // false
todo.toggle();
console.log(todo.completed); // true
todo.toggle();
console.log(todo.completed); // false
todo.toggle();
console.log(todo.completed); // false
console.log('hola mundo!');
