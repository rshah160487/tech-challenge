# Test Plan for To-Do List App

## Test Scenarios
1. **Adding a new to-do item**
   - Verify that a new task can be added to the list.
   - Validate that the task appears in the "All" filter.

2. **Editing an existing to-do item**
   - Verify that an existing task can be edited.
   - Validate that the updated task is reflected in the list.

3. **Marking a to-do item as completed**
   - Verify that a task can be marked as completed.
   - Validate that the task appears in the "Completed" filter.

4. **Deleting a to-do item**
   - Verify that a task can be deleted.
   - Validate that the task is removed from the list.

5. **Adding random to-do item**
   - Verify that random to-do item is added
   - Verify that the name of random item is same as added
   
## Test Data
- Sample task: "Buy a pen"

## Tools
- Playwright for test automation
- Page Object Model (POM) for maintainability
- Dynamic data for scalability