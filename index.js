// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const api = require('./utils/api.js');
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your username?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe the installation process.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the project used for?',
            name: 'usage',
        },
        {
            type: "list",
            message: "Choose the license for the project. ",
            name: "license",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
                "unlicense",
                "zlib"
            ]
        },
        {
            type: 'input',
            message: 'Who has contributed to the project?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Is there a test?',
            name: 'tests',
        },
        {
            type: "input",
            message: "What should be done if there is an issue? ",
            name: "questions"
        },
        {
            type: "input",
            message: "Please enter your GitHub username. ",
            name: "username"
        },
        {
            type: "input",
            message: "Please enter your email address. ",
            name: "email"
        }


    ]);



// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Markdown file created.')
    });
}
const writeFileAsync = util.promisify(writeFile);
// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt();
        console.log('userResponses');
        const userInfo = await api.getUser(userResponses);
        console.log(userInfo);
        const generateContent = generateMarkdown(userResponses, userInfo);
        await writeFileAsync('ExampleREADME.md', generateContent);

    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();