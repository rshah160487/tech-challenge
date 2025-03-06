To-Do List App Automation
This project automates testing for a To-Do List App using Playwright and follows the Page Object Model (POM) design pattern. It includes data-driven tests, custom reporting, and a GitHub Actions workflow for continuous integration.

📂 Project Structure
Copy
📆 todo-list-app-automation
 ├── 📂 .github
 │   └── 📂 workflows
 │       └── 📄 playwright.yml          # GitHub Actions workflow
 ├── 📂 pages
 │   ├── 📄 base-page.js               # Base page with common methods
 │   └── 📄 todo-list-page.js          # Page class for the To-Do List App
 ├── 📂 tests
 │   └── 📄 to-do.spec.js          # Test cases for the To-Do List App
 ├── 📂 utils
 │   ├── 📄 reporter.js                # Custom test reporting
 │   └── 📄 helpers.js                 # Helper functions
 ├── 📄 index.html                     # To-Do List App HTML file
 ├── 📄 style.css                      # To-Do List App CSS file
 ├── 📄 script.js                      # To-Do List App JavaScript file
 ├── 📄 playwright.config.js           # Playwright configuration
 ├── 📄 package.json                   # Node.js dependencies and scripts
 ├── 📄 test-plan.md                   # Test plan document
 └── 📄 README.md                      # This file
🚀 Getting Started
Prerequisites
Node.js (version 16 or higher)

npm (comes with Node.js)

Playwright (installed via npm)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-username/todo-list-app-automation.git
cd todo-list-app-automation
Install dependencies:

bash
Copy
npm install
Running Tests Locally
Start the local server:

bash
Copy
npx http-server -p 3000
Run the Playwright tests:

bash
Copy
npm test
View the test report:

bash
Copy
npx playwright show-report
Running Tests with GitHub Actions
The project includes a GitHub Actions workflow that automatically runs the tests on every push or pull request to the main branch.

Push your changes to the repository:

bash
Copy
git push origin main
Go to the Actions tab in your GitHub repository to view the workflow run.

Download the test report from the Artifacts section.

🧪 Test Cases
The following test scenarios are automated:

Add a new to-do item

Edit an existing to-do item

Mark a to-do item as completed

Delete a to-do item

Add a random to-do item using dynamic data-driven

🛠️ Custom Reporting
The reporter.js file provides a custom test reporting mechanism. After each test run, it logs:

Total tests executed

Tests passed

Tests failed

List of failed tests (if any)

🧰 Helper Functions
The helpers.js file contains reusable utility functions, such as:

waitForTimeout: Adds a delay in the tests.

generateRandomString: Generates a random string for dynamic test data.

🤖 GitHub Actions Workflow
The .github/workflows/playwright.yml file defines the GitHub Actions workflow. It:

Sets up the environment.

Installs dependencies.

Starts the local server.

Runs the Playwright tests.

Uploads the test report as an artifact.

📝 Test Plan
Refer to the test-plan.md file for a detailed test plan covering:

Test scenarios

Test data

Tools used

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 Acknowledgments
Playwright for the powerful test automation framework.

http-server for serving the app locally.

📧 Contact
For questions or feedback, please contact:

Your Name

Email: your-email@example.com

GitHub: your-username