// Returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  console.log(3, license);
  if (license === "Apache") {
    return "![Apache](/assets/apache.svg)";
  } else if (license === "GNU") {
    return "![GNU](/assets/gun.svg)";
  } else if (license === "MIT") {
    return "![MIT](/assets/mit.svg)";
  } else {
    return "![ISC](/assets/isc.svg)";
  }
}

// Returns the license link
function renderLicenseLink(license) {
  // const licenseLink = "https:";
  // const licenseApache = "https://choosealicense.com/licenses/apache-2.0";
  // const licenseGNU = "https://choosealicense.com/licenses/gpl-3.0";
  // const licenseMIT = "https://choosealicense.com/licenses/mit";
  // const license = "https://choosealicense.com/licenses/isc";
}

// Returns the license section of README
function renderLicenseSection(license) {}

// Generates markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  const badge = renderLicenseBadge(answers.license);
  return `# ${answers.title}
  
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
  ${answers.description}

  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License


  ## Contribution
  Please follow these guidelines to offer contributions:
  ${answers.contribution}

  ## Tests
  I have written the following test for this application:
  ${answers.tests}

  ## Questions
  If issues arise, please reach me at the contact information below:
  ${answers.github}
  ${answers.email}
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
