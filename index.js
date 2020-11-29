const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description of your project.',
      name: 'description',
    },
    {
        type: 'input',
        message: 'How can users install the necessary dependencies to use the project on their local machine?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Credit individuals, sites, and any resources that made this project happen.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Select a license type.  Need help choosing?  See here: https://choosealicense.com/.',
        choices: ["MIT", "GPLv2", "Apache", "Other"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What should community members known about contributing to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
        name: 'tests',
    },
  ])
  // then is waiting for all of the user input; waiting for the data/response
  .then((response) => {
    console.log('response: ', response)

const readmeOutline = `
### ${response.title}

## Table of Contents 
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Credits](#credits)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Credits
${response.credits}

## License
Copyright &copy; Licensed under the ${response.license} license.

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
Contact me at ${response.email} with questions.  If you find something that could be improved about this application, you can submit a pull request or issue on GitHub [https://github.com/${response.username}](https://github.com/${response.username}).
`;
    
    fs.writeFile('README.md', readmeOutline, (err) =>
    err 
	 ? console.error(err) 
	 : console.log('Success!')
    );

  });

