"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __importDefault(require("../lib"));
describe('Todo', () => {
    it('should create a new todo with the correct description', () => {
        const todo = new lib_1.default('Buy groceries');
        expect(todo.description).toBe('Buy groceries');
    });
    it('should create a new todo with the completed property set to false', () => {
        const todo = new lib_1.default('Buy groceries');
        expect(todo.completed).toBe(false);
    });
    it('should toggle the completed property of the todo', () => {
        const todo = new lib_1.default('Buy groceries');
        todo.toggle();
        expect(todo.completed).toBe(true);
        todo.toggle();
        expect(todo.completed).toBe(false);
    });
});
//# sourceMappingURL=lib.test.js.map