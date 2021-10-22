const index = require("./index.js");

// Returns a license badge based on which license is passed in
function renderLicenseBadge() {
  // if (data.choices[0]) {
  //   console.log(data.choices[0]);
  //   const apache = "url to image";
  //     return badge = "https://img.shields.io/badge/Apache-License-yellow";
  // } else if (data.license === "GNU") {
  //     return badge = "https://img.shields.io/badge/GNU-License-brightgreen";
  // } else if (data.license === "MIT") {
  //     return badge = "https://img.shields.io/badge/MIT-License-red";
  // } else {
  //     return badge = "https://img.shields.io/badge/ISC-License-blue";
  // }
}

// Returns the license link
function renderLicenseLink() {
  // const licenseLink = "https:";
  // const licenseApache = "https://choosealicense.com/licenses/apache-2.0";
  // const licenseGNU = "https://choosealicense.com/licenses/gpl-3.0";
  // const licenseMIT = "https://choosealicense.com/licenses/mit";
  // const license = "https://choosealicense.com/licenses/isc";
}

// Returns the license section of README
function renderLicenseSection() {}

// Generates markdown for README
function generateMarkdown(data) {
  console.log(data);
  const badge = renderLicenseBadge();
  return `# ${data.title}
  
  ${badge}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Collaboration](#collaboration)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License


  ## Contribution
  Please follow these guidelines to offer contributions:
  ${data.contribution}

  ## Tests
  I have written the following test for this application:
  ${data.tests}

  ## Questions
  If issues arise, please reach me at the contact information below:
  ${data.github}
  ${data.email}
`;
}

generateMarkdown();
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;
module.exports = renderLicenseSection;
