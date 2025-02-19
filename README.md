# SoftwareEngineering
Summative 1 for Northeastern University

## Author
Naim Rahman

## Project Proposal
The Aviation Flight Search app is a simple tool designed to make finding the latest real-time flight information quick and easy. It connects to the AviationStack API to fetch details such as airline names, flight numbers, departure and arrival airports, and flight statuses. Going for a minimalist, simple design, it caters to a variety of users, from aviation enthusiasts and travellers to colleagues needing quick access to reliable flight data across airlines. The link to the web app can be found here: https://naim-r4h.github.io/SoftwareEngineering/

This application also highlights the growing importance of real-time data in the aviation industry, where up-to-date information is needed for managing schedules and addressing delays. While airlines have websites to track their own flights, it is beneficial to have an app that considers all airlines, and clearly displays only the information that is key, reducing background 'noise' and info. While the current version focuses on retrieving flight data, there is significant potential for future enhancements. Features like real-time flight tracking, notifications for flight updates, or even integration with booking systems could turn this into a more comprehensive tool. The benefit with starting minimlaistic is that it is easy to expand in an agile manner depending on user feedback and experience, rather than traditionally meticuluously planning everything out from scratch with every single detail, which is not onyl time-consuming but often also ineffective, as changes to the plan are inevitable due to unforeseen circumstances, constraints, bugs, etc.

![image](https://github.com/user-attachments/assets/e1719717-23df-4154-9b2d-fc6f82e00802)

## Features
* The user can enter a flight number of their choice into the search box
* They click enter to either trigger API retrieval or an error message
* They are displayed with information for that flight such as stations, departure and arrival times, and status.

## Prototype

Before beginning development, I created a basic prototype of the Aviation Flight Search application in Figma to visualise the layout and design of the interface. This prototype included key elements such as the flight search form and a results container. To gather feedback, I created a Microsoft Form and shared it with a small group of potential users, asking for their thoughts on the design, and any additional features they’d find valuable. The feedback helped identify improvements early, such as not being as minimalistic as I was originally, adding more colour, images, icons, etc., to make it more aviation related. This process saved significant time during development by reducing the need for major design changes later and provided a clear roadmap to follow, ensuring that the final product aligned with user expectations from the start.

![image](https://github.com/user-attachments/assets/e05f1831-b3be-4eee-b027-94a95c24f7d3)

Link to Prototype: https://www.figma.com/design/bsn7uvvFhSaIzZEHAXLPDA/Untitled?node-id=0-1&t=QCTQHdW0ZR113NfB-1

Link to MS Form: https://forms.office.com/r/ZGEJpFCApa

## Project Management

The project began with the creation of a Project Charter, which I roughly created to outline the goals, deliverables, scope, and key stakeholders. In this step, the Product Owner (me) gathers requirements, for example, input validation, integration with AviationStack API, and clean UI. I grouped tasks with high-level functionality into certain categories to be populated into the backlog such as:
* Input validation (Regex for flight numbers).
* Real-time flight information API integration.
* UI and UX design (airplane icon on a sky-themed background).
* Jest test configuration for API and validation functions.
Each of these features is broken down into smaller, actionable issues, which are then ordered and put on the Kanban board. The purpose of the board is to show the workflow with the columns 'To Do', the tasks yet to be started. Then 'In Progress', tasks currently being worked on. Thirdly, 'in review', tasks in testing or code review. Finally, 'done', which include completed tasks. See the KanBan board below as a reference:

![KanBan 2](https://github.com/user-attachments/assets/8bb9241c-93ef-4363-9503-434371e54a9b)


I tried to ensure work-in-progress task limits were set to allow no more than 2-3 activities to be underway at any one time to avoid bottlenecks and maintain concentration. Also, it allows to view the speed of progress, and how components link and feed into each other. GitHub Projects helped a lot in this regard, with limits enabled to prevent overloading and ensuring a consitent, clear workflow, able to easily visualise how tasks and sub-tasks are completed and move across the board. 

Furthermore, I created a risk register to identify potential issues that could arise, allowing for anticipation and planning different solutions.

| Risk                          | Likelihood | Impact | Mitigation Strategy                                                     |
|-------------------------------|------------|--------|--------------------------------------------------------------------------|
| API service downtime          | Medium     | High   | Implement error handling and display fallback messages to users.         |
| Invalid or malformed user inputs | High    | Medium | Validate inputs with regex before sending API requests.                  |
| Design inconsistencies across browsers | Medium | Low | Test and tweak the app on multiple browsers.                      |

Agile's incremental approach allowed the app to be developed feature by feature—starting with basic UI creation, input validation, followed by API integration, and while simultaneously integrating testing and feedback at different stages. This flexibility ensured that any issues or changes in requirements were addressed promptly without disrupting the entire project. Unlike the Waterfall methodology, which follows a rigid, sequential process, Agile allowed for overlapping phases (e.g., testing alongside development), reducing the risk of delivering a product that didn't meet user expectations. I was able to focus on new tasks without completing the initial draft, taking into account feedback like logos, themes, etc., allowing the UI design to evolve quickly and avoid time-wasting.

The first sprint included the development of a basic template, defining the structure of the container, and adding placeholders for the header, search form, and result section. This followed design principles such as simplicity and modularity to enable scalability when adding new features. The second sprint focussed more on the functionality side of things, creating javascript and testing modules to bring the app to life. I initially had another repo which was created two weeks ago, but it was deleted, hence the creation of a more recent one - the idea was that sprints would last a week each, with sprint planning, retrospectives (if I were part of a team), and sprint reviews.

In a sequence of planning and execution, components were incrementally added: the addition of a search box and the logic for handling errors. The functions validate the inputs for certain set criteria, reflecting risk mitigation practices in grace handling of invalid data. In the implementation stage, the features were adapted to meet the requirements of the project by integrating the AviationStack API. The critical element of the Monitoring and Control phase was testing, used with unit tests in Jest to verify input validation and API integration; this simulates edge cases to handle errors before deployment.

At the last stage, we then furnished the application with rich visuals: a sky background and an airplane icon, a footer for aesthetic purposes, and maintained the design principles focused on the user. The web application was functional and minimalistic, and, in terms of the project lifecycle, followed an iterative approach, with a tad of linearity due to the time constraints.

## User Guide

### How to Use
1. **Open the App**:
   - Launch the app by clicking on this link: https://naim-r4h.github.io/SoftwareEngineering/

2. **Search for a Flight**:
   - Enter a flight number in the format of two letters followed by 1–4 digits (e.g., `BA304`).
   - Click the **Search** button.

3. **View Results**:
   - If the input is valid and the flight exists, the app will display the flight's details, such as the airline, departure and arrival airports, and flight status.
   - If the input is invalid, an error message will appear prompting you to enter a correct flight number.

4. **Error Handling**:
   - If the flight number doesn't exist or there is an issue with the API, the app will notify you with an appropriate error message.


## Technical Guide

### Setup Instructions
1. **Prerequisites**:
   - Install [Node.js](https://nodejs.org/) to use npm (Node Package Manager) for installing dependencies and running tests.
   - Download the project files and save them in a selected folder.

2. **Installing Dependencies**:
   If restrictions prevent npm from running commands (e.g., PowerShell execution policy errors), follow these steps:

   - **Bypassing PowerShell Restrictions**:
     Open PowerShell and run:
     ```bash
     Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
     ```
     This temporarily allows npm to execute commands by bypassing system restrictions.

   - **Initialise npm**:
     ```bash
     npm init -y
     ```

   - **Install Jest**:
     ```bash
     npm install jest
     ```
     Jest is the testing framework used to validate the app's functionality.

   - **Install JSDOM Environment for Jest**:
     ```bash
     npm install --save-dev jest-environment-jsdom
     ```
     JSDOM is required for running tests that simulate a browser environment.

3. **Testing Setup**:
   - In the test file (e.g., `index.test.js`), I had to specify the environment to use JSDOM by adding this line at the top:
     ```javascript
     /**
      * @jest-environment jsdom
      */
     ```

4. **Running Tests**:
   - Use the following command to execute all tests:
     ```bash
     npm test
     ```
     This runs the Jest tests to validate input validation, API response handling, and error management.

---

### Why Errors Occurred During Setup
The errors occurred because of restrictive system policies on the machine, which blocked the execution of certain scripts and commands. By default, **PowerShell Execution Policy** restricts running unsigned or untrusted scripts to protect the system. Running the `Set-ExecutionPolicy` command temporarily bypassed these restrictions for the session.

Additionally, Jest requires a **browser-like environment** (e.g., JSDOM) to simulate DOM interactions in JavaScript tests. Without installing `jest-environment-jsdom`, tests that rely on the DOM (e.g., `document.querySelector`) will fail.

---

### Testing Explanation
Once the setup issues were resolved:
1. Tests were written to validate:
   - Correct flight number formats (e.g., `validateFlightNumber` function).
   - API responses for specific input (e.g., checking for fields like `airline.name` and `flight.iata`).
   - Handling invalid inputs or API errors.

2. Tests were run successfully after the setup, ensuring  the app worked as intended.

---

## Code coverage

Code coverage measures how much of my source code is actually executed during testing. It gives an indication of how many sections of my code are 'covered' (run) through by my tests and how many sections aren't. Coverage, at least, when I ran it, covered the following aspects:
* Statements: The percentage of executable statements in the code that were run during the tests
* Branched: The percentage of conditional branches.
* Lines: The number of individual lines of code which were executed.

The coverage report for this project, shows that 28% of statements, 28% of branches, 40% of functions, and 28% of lines are covered by the existing test suite. More specifically, lines 39-99 in script.js are not tested, which corresponds to a big part of the main logic of the application, including API fetching and UI updates.

![image](https://github.com/user-attachments/assets/31319612-4866-44ae-85e4-020908c60f9d)

This low coverage would suggest that, while the validation and parts of the API logic are tested, key areas-such as how the application handles  errors, or dynamically updating the DOM are not tested. These areas should be improved with more tests to make the application more robust and reliable, making sure the app behaves correctly under as many scenarios as possible.

## Lighthouse Audit

Lighthouse is an open-source tool provided by Google used for auditing web pages in matters of Performance, Accessibility, Best Practices, and SEO. It provides a comprehensive overview of how well a website performs in these areas,. Each category is scored out of 100, with higher scores meaning better optimisation. Lighthouse assesses parameters such as load speed, mobile-friendliness, usability, and adherence to state-of-the-art development standards.

![image](https://github.com/user-attachments/assets/ecca160f-7a6e-442f-bab3-d8480f2991d7)

In the above report, my website did great in Performance, which got 94 - the page loaded really fast. An Accessibility score of 92 means that most items are friendly for use and accessible; minor areas may include alt text for images or increasing color contrast. A Best Practices score of 96 signifies good security and web development practices with improvement only through small optimisations. Lastly, the SEO score is 83, which is quite good to show that the website is search-engine friendly, but a little more can be added, like a meta description or schema, to further enhance visibility. Overall, the site is well-built, functional, and optimised; it just needs a few tweaks to perfection.

## Conclusion

The aviation flight search web app was designed using an agile approach with structured project management, therefore, providing an efficient and an attractive tool. Through the use of an API like AviationStack, it provides real-time information related to flights; it integrates crucial features into the app, including input validation and error handling and responsiveness. In this respect, the design principles followed by the project ensure clarity, simplicity, and ease of navigation, while iterative development and Agile methodologies allowed making improvements incrementally, focused on the user. This testing also ensured that input validation and fetching of data from APIs are sufficiently robust to let the app perform correctly when valid user input is applied.

However, this project faced certain limitations with respect to API integrations. AviationStack API didn't always return results as per expectations. Even when narrowing the search to recent flights-say, flights in the past 24 hours-many flights did not show up. Such inconsistency could impact user trust adversely and may prompt consideration of evaluating other APIs or putting in place mechanisms for fallback in order to widen the scope of covered data. The second and equally important factor was ensuring the app's operation on platforms like GitHub Pages required updating the API URL from HTTP to HTTPS since modern browsers block insecure requests on secure contexts. Such hurdles make clear just how necessary flexibility, technical adaptability, and complete API documentation are to minimise all pains during the implementation of third-party APIs.

There is immense scope for improvement. The app could be complemented by some additional features: historical flight tracking, enhanced filtering options, integration with several APIs for more reliable data and better coverage. The interface may also support complex visualisations, such as dynamic maps to represent flight routes or real-time status. Also, extending support for different types of users-for example, airport staff or frequent travelers-will add value to the application. Future iterations would focus on the shortcomings of the current API and find alternatives to ensure seamless and reliable user experiences. This project has great potential to scale, with many lessons learned in integrating third-party services and adapting to technical challenges.
