"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
    toggle() {
        this.completed = !this.completed;
    }
}
exports.default = Todo;
//# sourceMappingURL=lib.js.map