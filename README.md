# Kash Note Front End Repo

This project is the front end side for Ada Developer's Academy Capstone Project. 
Kash Note is an app where clients are able to gather their spendings into one platform and set a monthly budget goal. 
This app works with a Flask API where data is retrieved and stored. 

## Description

The app will start on a Landing Page, where users can log in using a Google Account. At the bottom of this Landing Page, there are four different previews of today's financial news called from a Finance API. Clicking on those previews will open the article in a new tab. Once users are successfully logged into their Google accounts, the Main Page will display. 

There are three main parts to this application. 

<ol>
  <li>The expense spreadsheets, which displays the current month's log of expenses. Users may add an expense to a specific category or click on a different month to see naviagate to that month's spreadsheet.</li>
  <li>The budget tracker. On the top right, users are able to add or edit the budget amount and see if they are under budget, close to the budget, or over budget.</li>
  <li>The charts on the bottom right allow users to view their spendings by category in both a circle and a bar chart.</li>
 </ol>

## Dependencies

This app relies on: 
<ul>
  <li>Axios</li>
  <li>React-Bootstrap</li>
  <li>React-SpreadSheet</li>
  <li>Chart.js</li>
  <li>Google OAuth</li>
</ul>


## Setting Up the Project

After forking and cloning this repo, run `yarn install` in the project directory.
This will download and install all of the necessary node modules required by the project. 
After that finishes successfully, run `yarn start` to begin the local development server.

## Authors

Kash Note is developed by Ada Developer Academy's Cohort 17 Students - Katherine Otten Kim and Kelly Kang. 


