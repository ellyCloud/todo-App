export class Model {
  user;
  items;

  constructor() {
    this.user = 'Elif';
    this.items = [
      new TodoItem('Breakfast', false),
      new TodoItem('Sports', false),
      new TodoItem('Paying Bills', true),
      new TodoItem('Go to the Cinema', false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description: any, action: any) {
    this.description = description;
    this.action = action;
  }
}
