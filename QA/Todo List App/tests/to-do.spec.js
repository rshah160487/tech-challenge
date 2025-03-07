import { test, expect } from '@playwright/test';
import { TodoListPage } from '../pages/to-do-page';
import { Helpers } from '../utils/helper';
import { Reporter } from '../utils/reporter';

test.describe('To-Do List App Tests', () => {
  let todoListPage;
  const testResults = {
    total: 0,
    passed: 0,
    failed: 0,
    failures: [],
  };
    // Navigate to the url
  test.beforeEach(async ({ page }) => {
    todoListPage = new TodoListPage(page);
    await todoListPage.navigate();
  });
 
  // Clear all tasks after each test
 test.afterEach(async ({}, testInfo) => {
    await todoListPage.clearAllTasks();
    testResults.total++;
    if (testInfo.status === 'passed') {
      testResults.passed++;
    } else {
      testResults.failed++;
      testResults.failures.push({ title: testInfo.title });
    }
  });
  
    test.afterAll(() => {
      Reporter.logTestResults(testResults); // Log test results
  });

  // Add a new to-do item
  test('Add a new to-do item', async () => {
    await todoListPage.addTask('Buy a pen');
    expect(await todoListPage.getTaskText(0)).toBe('Buy a pen');
  });

  // Edit an existing to-do item
  test('Edit an existing to-do item', async () => {
    await todoListPage.addTask('Buy a pencil');
    await todoListPage.editTask(0, 'Buy a sketch pen');
    expect(await todoListPage.getTaskText(0)).toBe('Buy a sketch pen');
  });

  // Delete a to-do item
  test('Delete a to-do item', async () => {
    await todoListPage.addTask('Go to Gym');
    await todoListPage.deleteTask(0);
    expect(await todoListPage.getTaskCount()).toBe(0);
  });

  // Mark a to-do item
  test('Mark a to-do item as completed', async () => {
    await todoListPage.addTask('Go for run');
    await todoListPage.toggleTaskCompletion(0);
    expect(await todoListPage.isTaskCompleted(0)).toBe(true);
  });

  // Add a randomly generated to-do item (Dynamic Data)
  test('Add a random to-do item', async () => {
    const randomTask = Helpers.generateRandomString(10);
    await todoListPage.addTask(randomTask);
    expect(await todoListPage.getTaskText(0)).toBe(randomTask);
  });
});