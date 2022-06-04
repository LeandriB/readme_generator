// Function that returns the license section of README
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "ISC":
      badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      break;
    case "GNU GPLv3":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Mozilla":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    default:
      break;
  }
  return badge;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

    ${data.description}

  ## Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  Run the following command in your terminal in order to clone this repo:

  ${data.installation}

  ## Usage
  
  ${data.usage}

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

  ${renderLicenseBadge(data.license)}

  This application is licensed under the ${data.license} License.

  ## Questions

  If you have any questions, please contact me at my[email](${data.email}). You can find more of my work on my GitHub at [LeandriB](${data.github}). 
`;
}

module.exports = generateMarkdown;
