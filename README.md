
1 new activity
1 new notification
Has context menu
Chat




Unread
Channels
Chats
Unread messageLast messageGroup chatMeeting chatChatPersonal at mentionEveryone at mentionImportantUrgentDraftDraftMutedMeeting in progressMeet now in progressYou can't send messages because you are not a member of the chat.You cannot send messages to this botPrivateSharedHas context menuChannel at mentionTeam at mentionPersonal at mentionUnreadUnreadMeeting in progressUnreadChannelTeamHas pinned messagesSee moreCommunityTemporarily shownHas context menuBadged chatBadged chats
Has context menu
Dnyanesh Panchal (You)

Chat

Shared

Storyline
Has context menu




Message List
. by Dnyanesh Panchal
Tuesday 1:56 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Tuesday 1:57 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Tuesday 2:15 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Tuesday 2:16 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Tuesday 2:16 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Tuesday 5:06 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Tuesday 6:42 PM
Dnyanesh Panchal

.

Message by Dnyanesh Panchal, has an attachment.
Yesterday 12:48 PM
Dnyanesh Panchal

QA_Fresher_Training_Task_Part2_Advanced_Playwright.docx
personal > rahul_gupta_zeuslearning_com



. by Dnyanesh Panchal
Yesterday 2:30 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 2:31 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 2:31 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 2:32 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 2:34 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 2:34 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 2:34 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 3:03 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 3:10 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 3:10 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 3:10 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
Yesterday 3:54 PM
Dnyanesh Panchal

.

, by Dnyanesh Panchal
Yesterday 5:31 PM
Dnyanesh Panchal

,

. by Dnyanesh Panchal
Yesterday 6:36 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
5:17 PM
Dnyanesh Panchal

.

, by Dnyanesh Panchal
6:18 PM
Dnyanesh Panchal

,

. by Dnyanesh Panchal
6:37 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
6:57 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
7:07 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
7:17 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
7:30 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
7:33 PM
Dnyanesh Panchal

.

. by Dnyanesh Panchal
7:56 PM
Dnyanesh Panchal

.

---



## DAY 1



Day 1 Objectives:



1. Understand Browser Window handling in Playwright

2. Learn Network Mocking concepts

3. Automate browser window scenarios

4. Intercept and mock API responses

5. Validate application behavior using mocked responses

6. Generate Playwright HTML reports



Day 1 Tasks Completed:



Task 1: Browser Window Handling



1. Verify New Tab button opens a new tab

2. Verify content displayed in the newly opened tab

3. Close child tab and switch back to parent page

4. Verify New Window Message functionality



Task 2: Network Mocking



1. Mock API response and verify books displayed

2. Mock empty API response

3. Simulate delayed API response

4. Validate UI behavior against mocked responses



Challenges Faced:

Understanding Playwright browser context handling while working with multiple tabs and windows.

Understanding API interception and route mocking concepts.

Managing synchronization for delayed network responses without using hardcoded waits.

Creating reusable test data and avoiding hardcoded values in test scripts.



Debugging and Failure Analysis:



Failure Category 1:

Locator Failure



Reason for Failure:

An incorrect locator was intentionally used for the New Tab button.



Root Cause:

The locator did not match any element present in the DOM, causing Playwright to continuously search for the element until timeout.



Resolution:

Verified the locator using browser developer tools and restored the correct selector.



Failure Category 2:

Assertion Failure



Reason for Failure:

An incorrect expected value was used during validation.



Root Cause:

The actual application content did not match the expected assertion value.



Resolution:

Updated the assertion with the correct application value.



Failure Category 3:

Network Mock Failure



Reason for Failure:

An exception was intentionally introduced inside the route interception handler.



Root Cause:

The mocked API response could not be fulfilled because the route handler terminated with an error.



Resolution:

Removed the exception and restored the original mocked API response.



Failure Category 4:

Browser Window Handling Failure



Reason for Failure:

Validation was attempted on the parent page after opening a new tab.



Root Cause:

The expected element existed inside the child tab but the script continued execution on the parent page.



Resolution:

Captured the child tab using page.context().waitForEvent('page') and performed validations on the child page reference.



Failure Category 5:

Data Validation Failure



Reason for Failure:

An incorrect book title was used during validation.



Root Cause:

The expected value was not present in the mocked response data.



Resolution:

Updated the validation to use the correct value from the centralized test data file.



Timeout Analysis:



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



---



## DAY 2



Day 2 Objectives:



1. Understand Playwright Fixtures

2. Create reusable Page Fixtures

3. Create Utility Fixtures

4. Improve test maintainability and reusability

5. Generate execution reports



Day 2 Tasks Completed:



Task 1: Page Fixture Implementation



1. Created custom page fixture

2. Configured reusable page object initialization

3. Integrated fixture usage within test cases



Task 2: Utility Fixture Implementation



1. Created utility fixture

2. Implemented reusable helper functionality

3. Integrated utility fixture into the framework



Task 3: Reporting



1. Executed complete test suite

2. Generated Playwright HTML reports

3. Analyzed execution results



Challenges Faced:

Understanding Playwright fixture lifecycle and execution flow.

Integrating fixtures without impacting existing framework structure.

Maintaining framework readability while introducing reusable components.



Learning Outcomes:

Improved understanding of Playwright fixtures and dependency injection.

Learned how reusable fixtures reduce code duplication.

Strengthened understanding of framework design and maintainability.

Improved debugging and failure analysis skills through simulated failure scenarios.

Shift+Enter
starts a new line.
has context menu


