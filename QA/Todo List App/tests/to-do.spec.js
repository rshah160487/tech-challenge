import { test, expect } from '@playwright/test';
import { TodoListPage } from '../pages/to-do-page';
import { Helpers } from '../utils/helper';

test.describe('To-Do List App Tests', () => {
  let todoListPage;
    // Navigate to the url
  test.beforeEach(async ({ page }) => {
    todoListPage = new TodoListPage(page);
    await todoListPage.navigate();
  });
 
  // Clear all tasks after each test
 test.afterEach(async () => {
    await todoListPage.clearAllTasks();
  });

  // Add a new to-do item
  test('Add a new to-do item', async () => {
    await todoListPage.addTask('Buy groceries');
    expect(await todoListPage.getTaskText(0)).toBe('Buy groceries');
  });

  // Edit an existing to-do item
  test('Edit an existing to-do item', async () => {
    await todoListPage.addTask('Buy groceries');
    await todoListPage.editTask(0, 'Buy milk');
    expect(await todoListPage.getTaskText(0)).toBe('Buy milk');
  });

  // Delete a to-do item
  test('Delete a to-do item', async () => {
    await todoListPage.addTask('Buy groceries');
    await todoListPage.deleteTask(0);
    expect(await todoListPage.getTaskCount()).toBe(0);
  });

  // Mark a to-do item
  test('Mark a to-do item as completed', async () => {
    await todoListPage.addTask('Buy groceries');
    await todoListPage.toggleTaskCompletion(0);
    expect(await todoListPage.isTaskCompleted(0)).toBe(true);
  });

  // Add a random to-do item
  test('Add a random to-do item', async () => {
    const randomTask = Helpers.generateRandomString(10);
    await todoListPage.addTask(randomTask);
    expect(await todoListPage.getTaskText(0)).toBe(randomTask);
  });
});