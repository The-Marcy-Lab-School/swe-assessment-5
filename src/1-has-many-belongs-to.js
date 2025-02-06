const { getId } = require('./utils');

class ToDoItem {
  constructor() {
    this.id = getId();
  }
}


class ToDoList {
  constructor() {
    this.id = getId();
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};