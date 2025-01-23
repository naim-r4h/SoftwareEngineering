# SoftwareEngineering
Summative 1 for Northeastern University

## Author
Naim Rahman

## Project Proposal
The Aviation Flight Search app is a simple tool designed to make finding the latest real-time flight information quick and easy. It connects to the AviationStack API to fetch details such as airline names, flight numbers, departure and arrival airports, and flight statuses. Going for a minimalist, simple design, it caters to a variety of users, from aviation enthusiasts and travellers to colleagues needing quick access to reliable flight data across airlines.

This application also highlights the growing importance of real-time data in the aviation industry, where up-to-date information is needed for managing schedules and addressing delays. While airlines have websites to track their own flights, it is beneficial to have an app that considers all airlines, and clearly displays only the information that is key, reducing background 'noise' and info. While the current version focuses on retrieving flight data, there is significant potential for future enhancements. Features like real-time flight tracking, notifications for flight updates, or even integration with booking systems could turn this into a more comprehensive tool. The benefit with starting minimlaistic is that it is easy to expand in an agile manner depending on user feedback and experience.

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

## Code coverage

Code coverage measures how much of my source code is actually executed during testing. It gives an indication of how many sections of my code are 'covered' (run) through by my tests and how many sections aren't. Coverage, at least, when I ran it, covered the following aspects:
* Statements: The percentage of executable statements in the code that were run during the tests
* Branched: The percentage of conditional branches.
* Lines: The number of individual lines of code which were executed.

The coverage report for this project, shows that 28% of statements, 28% of branches, 40% of functions, and 28% of lines are covered by the existing test suite. More specifically, lines 39-99 in script.js are not tested, which corresponds to a big part of the main logic of the application, including API fetching and UI updates.

![image](https://github.com/user-attachments/assets/31319612-4866-44ae-85e4-020908c60f9d)

This low coverage would suggest that, while the validation and parts of the API logic are tested, key areas-such as how the application handles  errors, or dynamically updating the DOM are not tested. These areas should be improved with more tests to make the application more robust and reliable, making sure the app behaves correctly under as many scenarios as possible.
