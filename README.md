# TPG-Circle-Ci

**How to execute test:**

We can execute Cypress Test using different methods:

**a. Execute Cypress Test in Cypress Test Runner Window:**
1. Install Node Js, Visual Studio Code (VSC)
2. Install and open Cypress in VSC
3. In the VSC Cypress Integration folder, add test files (use the test files uploaded in github)
--Upon adding of test files in VSC, Cypress Test Runner Window will display the added test file

**Note:** In cypress.json file - you can add this code: {"watchForFileChanges": false}
If false, everytime you update the test file and save it, the test runner will not automatically run any test
If true, everytime you update the test file and save it, cypress runs all tests without the need to click the "Run all tests" button

5. In the Cypress Test Runner Window, select the browser where you will run the test (ex. Chrome 96)
6. Click the selected Test file/case on the runner window to open it in IDE and to display the test run
7. --The Cypress test runner (Chrome) shows all the details of the test in the left side panel and the execution details on the right-hand side panel.
8. 8. Repeat step 6 to execute the other test files/cases

**b. Execute Cypress Test from Terminal/CLI**
Pre-Condition: Step 1 to 3 of letter A are already done
In the VSC, type npx cypress run and press enter key.
--VSC will display the test result

**c. Execute Cypress Testin Circle Ci**
**Pre-condition:** GitHub and Circleci mapping already setup
1. Install cypress
2. Create .circleci folder in the root level and create config.yml file
3. Push the code
4. View in Circleci dashboard the result of the test

**Note:** If there are changes in the test file/case, commit and push the changes.
