// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

    ${data.description}

  ## Contents

  - [Installation](#installation)
  - [Screenshot](#screenshot)
  - [Attributions](#attributions)
  - [Tests](#test)
  - [License](#license)

  ## Installation

  ${data.installation}

  Run the following command in your terminal in order to clone this repo:

  ```` 
  git clone ${data.clone} 
  ````

  ## Usage
  
  ${data.usage}

  ## Resources

  ${data.resources}

  ## Contributing

  In order to contribute, create a pull request and follow the steps listed below:

    - Fork the repo
    - Create a feature branch (git checkout -b NAME-HERE)
    - Commit your new feature (git commit -m 'Add some feature')
    - Push your branch (git push)
    - Create a new Pull Request

  Following a code review, your feature will be merged.

  ## Tests

  ${data.test}

  ## License

  ${data.license}

  ## Questions

  ${data.questions}
`;
}

module.exports = generateMarkdown;
