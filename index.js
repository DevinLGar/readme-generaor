// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log('Please enter project title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project? (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                }
                else {
                    console.log('Please enter a description!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter install instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use the app?'
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log("README.md created.")
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err);
    });