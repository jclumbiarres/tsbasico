export default class Todo {
  description: string;
  completed: boolean;

  constructor(description: string) {
    this.description = description;
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }
}
