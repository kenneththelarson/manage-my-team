//const { writeFile, copyFile } = require('./')
const inquirer = require('inquirer');
//const Manager = require('./lib/__mocks__/Manager');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name:",
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter the team manager's employee ID number:",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log("Enter the team manager's ID number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the team manager's email address:",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Enter the team manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "Please enter the team manager's office number:",
        }
    ]);
};

promptUser();