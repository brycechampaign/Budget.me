![thumbnail](https://user-images.githubusercontent.com/24477732/72825571-2e0f1c00-3c6f-11ea-8f62-831a8381b98e.png)
# Budget.Me
A full-stack budgeting web app utilizing React, MongoDB, Express, and vanilla CSS. See the live version [here](https://budget-dot-me.herokuapp.com/)

## Overview
Budget.Me is a personal budgeting app that displays dynamic statistics and helps user's plan out their monthly budgets. The core of this application was developed in 2 days.

## Description
Budget.Me helps users plan out their monthly budgets by displaying statistics, spending history, their current monthly goal and balance, and more. Users can create a new budget or sign in if they already have one and begin tracking their spending with ease.

### Features
#### Creating a Budget
If a user has no budget, they are prompted to create one by entering their username and a target budget for that month. After a user creates a budget, their session information is kept in local storage, allowing for automatic "logging in" when revisting the site.

##### TODO:
* Implement authentication

#### Recording Transactions
Users can record new transactions by clicking the "Add Transaction" button and filling out the following modal form. The user can specify the recipient of the transaction, the catgory the transaction belongs to, the date it was made, and any notes associated with the transaction. The transaction will then be dynamically displayed in the transaction list after submission.

#### Expanding Transactions
Transactions can be clicked on to expand them, revealing any notes added when the transaction was recorded.

![Peek 2020-01-21 12-10](https://user-images.githubusercontent.com/24477732/72826564-fa34f600-3c70-11ea-8785-2089f919beda.gif)

#### Viewing Statistics
After recording transactions, users can review statistics by looking at the overview at the top of the page. This overview displays the current monthly goal, the total amount of money spent, the total amount of income, the user's total balance (sum of total spent and total income), and the percentage difference between the user's total spent and the monthly target. 
![overview](https://user-images.githubusercontent.com/24477732/72825967-e3da6a80-3c6f-11ea-96a1-b83a1b7fe83a.png)

A graph for displaying the user's balance history over the current month and a graph for displaying the overall distribution of categories for all of the transactions are displayed below the transaction list as well.

## Installation
### Requirements
* [NodeJS and NPM](https://nodejs.org/en/)
### Steps
#### Cloning/Downloading the Repository
Clone this repository using the `git clone` command or download and extract it to a local file directory.
#### Installing dependencies
Install required dependencies by accessing the root directory of the local version of the project in your terminal and running `npm install`.
#### Building the files
The front-end files must be built by running the `npm run build` command in the terminal at the root directory of the application. The `npm run build:dev` command can also be issued for watching the files.
#### Starting the server
From the root of the application directory, run `npm start` to start the server. The application static files will be served at localhost port 3000. The `npm run start:dev` command can be used to watch for changes, but `nodemon` is required for this functionality.
