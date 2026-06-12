This repository contains the completed Automation Task 2.
-

This project is developed using Playwright with TypeScript to automate Browser Window handling and Network Mocking scenarios on the DemoQA application. The framework follows the Page Object Model (POM) approach with reusable page classes, centralized test data, fixtures, network interception, failure simulation, and HTML reporting for improved maintainability and scalability.


Application under test: https://demoqa.com



Prerequisites:
-

Make sure the following are installed on the system: Node.js, VS Code, Playwright and TypeScript.



## Project Setup:

Clone or open the project in VS Code.

1. Install the dependencies by running the command:

```bash

npm install

```

2. Install the Playwright browsers by running this command:

```bash

npx playwright install

```

3. Verify Playwright installation by running:

```bash

npx playwright test

```

## Test Execution:

Run all test cases by running this command:

```bash

npx playwright test

```

Run all tests in UI mode by running this command:

```bash

npx playwright test --ui

```

Run a specific test file:



```bash
npx playwright test tests/browserWindows.spec.ts

```



Open the HTML Report by running this command:

```bash

npx playwright show-report

```

DAY 1
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Day 1 Objectives:

1. Understand Browser Window handling in Playwright
2. Learn Network Mocking concepts
3. Automate browser window scenarios
4. Intercept and mock API responses
5. Validate application behavior using mocked responses
6. Generate Playwright HTML reports

Day 1 Tasks Completed:
-

Task 1: Browser Window Handling

Verify New Tab button opens a new tab

Verify content displayed in the newly opened tab

Close child tab and switch back to parent page

Verify New Window Message functionality

---------------------------------------------------------------------------------------------
Task 2: Network Mocking
-

Mock API response and verify books displayed

Mock empty API response

Simulate delayed API response

Validate UI behavior against mocked responses

Challenges Faced:
-
Understanding Playwright browser context handling while working with multiple tabs and windows.

Understanding API interception and route mocking concepts.

Managing synchronization for delayed network responses without using hardcoded waits.

Creating reusable test data and avoiding hardcoded values in test scripts.

------------------------------------------------------------------------------------------------------------------------------------------------
Debugging and Failure Analysis:
-

1. Failure Category 1:

Locator Failure

Reason for Failure:

An incorrect locator was intentionally used for the New Tab button.

Root Cause:

The locator did not match any element present in the DOM, causing Playwright to continuously search for the element until timeout.

Resolution:

Verified the locator using browser developer tools and restored the correct selector.

2. Failure Category 2:

Assertion Failure

Reason for Failure:

An incorrect expected value was used during validation.

Root Cause:

The actual application content did not match the expected assertion value.

Resolution:

Updated the assertion with the correct application value.

3. Failure Category 3:

Network Mock Failure

Reason for Failure:

An exception was intentionally introduced inside the route interception handler.

Root Cause:

The mocked API response could not be fulfilled because the route handler terminated with an error.

Resolution:

Removed the exception and restored the original mocked API response.

4. Failure Category 4:

Browser Window Handling Failure

Reason for Failure:

Validation was attempted on the parent page after opening a new tab.

Root Cause:

The expected element existed inside the child tab but the script continued execution on the parent page.

Resolution:

Captured the child tab using page.context().waitForEvent('page') and performed validations on the child page reference.

5. Failure Category 5:

Data Validation Failure

Reason for Failure:

An incorrect book title was used during validation.

Root Cause:

The expected value was not present in the mocked response data.

Resolution:

Updated the validation to use the correct value from the centralized test data file.

Timeout Analysis:
-
1. Test Timeout

Reason:

The configured test timeout value was smaller than the actual execution duration.

Root Cause:

Overall test execution exceeded the configured timeout limit.

Resolution:

Increased the timeout value and optimized test execution.

2. Action Timeout

Reason:

A click action was performed on a non-existing element.

Root Cause:

Playwright could not locate the target element within the configured timeout period.

Resolution:

Verified locator correctness and ensured element availability before interaction.

3. Expect Timeout

Reason:

The assertion was performed on content that never appeared on the page.

Root Cause:

The expected condition was never satisfied within the assertion timeout period.

Resolution:

Verified expected values and ensured correct application behavior before validation.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DAY 2
- 

Day 2 Objectives:
-

1.Understand Playwright Fixtures

2.Create reusable Page Fixtures

3.Create Utility Fixtures

4.Improve test maintainability and reusability

5.Generate execution reports

Day 2 Tasks Completed:
-

Task 1: Page Fixture Implementation

Created custom page fixture

Configured reusable page object initialization

Integrated fixture usage within test cases

Task 2: Utility Fixture Implementation

Created utility fixture

Implemented reusable helper functionality

Integrated utility fixture into the framework

Task 3: Reporting

Executed complete test suite

Generated Playwright HTML reports

Analyzed execution results

----------------------------------------------------------------------------------------------------------------------------------
Challenges Faced:
-
1.Understanding Playwright fixture lifecycle and execution flow.

2.Integrating fixtures without impacting existing framework structure.

3.Maintaining framework readability while introducing reusable components.

Learning Outcomes:
-

1.Improved understanding of Playwright fixtures and dependency injection.

2.Learned how reusable fixtures reduce code duplication.

3.Strengthened understanding of framework design and maintainability.

4.Improved debugging and failure analysis skills through simulated failure scenarios.
