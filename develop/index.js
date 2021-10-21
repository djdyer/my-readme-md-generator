// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input

const questionsArr = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Describe your application. Include your purpose, motivation, problem solved, and lessons learned.",
      name: "description",
    },
    {
      type: "input",
      message: "What instructions are needed for installation?",
      name: "installation",
    },
    {
      type: "input",
      message:
        "What is your application used for? Include screenshots or instructions if available.",
      name: "usage",
    },
    {
      type: "list",
      message:
        "Choose the appropriate license for this application among a list of options:",
      choices: ["Apache", "GNU", "MIT", "ISC"],
      name: "installation",
    },
    {
      type: "input",
      message:
        "What guidelines might you have for possible contribution to your code?",
      name: "contribution",
    },
    {
      type: "input",
      message:
        "Have you written tests for your application? If so, include examples on how to run them.",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "github",
    },
    {
      type: "input",
      message:
        "If questions arise, what email address can be used to reach you?",
      name: "email",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const readMe = generateMarkdown(answers);
    console.log(readMe);
    fs.writeFile("REAME.md", answers, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
