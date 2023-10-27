import Todo from '../lib';

describe('Todo', () => {
  it('should create a new todo with the correct description', () => {
    const todo = new Todo('Buy groceries');
    expect(todo.description).toBe('Buy groceries');
  });

  it('should create a new todo with the completed property set to false', () => {
    const todo = new Todo('Buy groceries');
    expect(todo.completed).toBe(false);
  });

  it('should toggle the completed property of the todo', () => {
    const todo = new Todo('Buy groceries');
    todo.toggle();
    expect(todo.completed).toBe(true);
    todo.toggle();
    expect(todo.completed).toBe(false);
  });
});
