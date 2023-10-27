"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("./lib"));
const todo = new lib_1.default('Arreglar tsconfig.json y package.json');
console.log(todo.completed); // false
todo.toggle();
console.log(todo.completed); // true
todo.toggle();
console.log(todo.completed); // false
todo.toggle();
console.log(todo.completed); // false
//# sourceMappingURL=index.js.map