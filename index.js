// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    }, 
    {
        type: "input",
        name: "description",
        message: "Describe your project?"
    }, 
    {
        type: "input",
        name: "installation",
        message: "How do you install this project?"
    }, 
    {
        type: "input",
        name: "clone",
        message: "What is the github repo for cloning this project?"
    }, 
    {
        type: "input",
        name: "usage",
        message: "What is the relative path to your project preview?"
    },
    {
        type: "list",
        name: "license",
        message: "What type of license is used for this project?",
        choices: [
            "MIT", 
            "ISC", 
            "Apache", 
            "Mozilla", 
            "GPLv2",
        ]
    },
    {
        type: "input",
        name: "resources",
        message: "List any resources used to create this project:"
    },
    {
        type: "input",
        name: "test",
        message: "What are the testing protocols used for your project?"
    },
    {
        type: "input", 
        name: "questions",
        message: "List any questions that have come up for this project:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
