import { BasePage } from './base-page';

export class TodoListPage extends BasePage {
  constructor(page) {
    super(page);
    // Selectors
    this.taskInput = 'input[placeholder="Add a new task"]';
    this.taskList = '.task-box li';
    this.taskCheckbox = 'input[type="checkbox"]';
    this.taskText = 'p';
    this.editButton = '.uil-pen';
    this.deleteButton = '.uil-trash';
    this.settingsMenu = '.uil-ellipsis-h';
    this.taskMenu = '.task-menu';   
    this.clearAllButton = '.clear-btn';
  }

  async navigate() {
    await super.navigate('/Todo%20List%20App/');
  }

  // Add a new task
  async addTask(taskName) {
    await this.page.fill(this.taskInput, taskName);
    await this.page.press(this.taskInput, 'Enter');
  }

  // Get the text of a task by index
  async getTaskText(index) {
    return this.page.textContent(`${this.taskList}:nth-child(${index + 1}) ${this.taskText}`);
  }

  // Edit a task by index
  async editTask(index, newTaskName) {
    await this.page.click(`${this.taskList}:nth-child(${index + 1}) ${this.settingsMenu}`);
    await this.page.click(`${this.taskList}:nth-child(${index + 1}) ${this.taskMenu} li:nth-child(1)`); // Click Edit
    await this.page.fill(this.taskInput, newTaskName);
    await this.page.press(this.taskInput, 'Enter');
  }

  // Delete a task by index
  async deleteTask(index) {
    await this.page.click(`${this.taskList}:nth-child(${index + 1}) ${this.settingsMenu}`);
    await this.page.click(`${this.taskList}:nth-child(${index + 1}) ${this.taskMenu} li:nth-child(2)`); // Click Delete
  }

  // Toggle task completion status by index
  async toggleTaskCompletion(index) {
    await this.page.click(`${this.taskList}:nth-child(${index + 1}) ${this.taskCheckbox}`);
  }

  // Check if a task is completed by index
  async isTaskCompleted(index) {
    return this.page.isChecked(`${this.taskList}:nth-child(${index + 1}) ${this.taskCheckbox}`);
  }

  // Get the number of tasks
  async getTaskCount() {
    return this.page.locator(this.taskList).count();
  }

  // Clear all tasks
   async clearAllTasks() {
        this.clearAllButton; // Clear all tasks
    }
}
