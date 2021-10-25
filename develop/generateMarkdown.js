// Returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "![Apache](/assets/apache.svg)";
  } else if (license === "GNU") {
    return "![GNU](/assets/gun.svg)";
  } else if (license === "MIT") {
    return "![MIT](/assets/mit.svg";
  } else {
    return "![ISC](/assets/isc.svg)";
  }
}

// Returns the license link
function renderLicenseLink(license) {
  console.log(license);
  var licenseLink = "https://choosealicense.com/licenses";
  if (license === "Apache") {
    licenseLink += "/apache-2.0";
  } else if (license === "GNU") {
    licenseLink += "/gpl-3.0";
  } else if (license === "MIT") {
    licenseLink += "/mit";
  } else {
    licenseLink += "/isc";
  }
  return licenseLink;
}

// Generates markdown for README
function generateMarkdown(answers, licenseLink) {
  const badge = renderLicenseBadge(answers.license);
  return `# ${answers.title}

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
  ${answers.license}
  Copyright (c) ${answers.name} [${new Date().getFullYear()}]  
  [${badge}](${renderLicenseLink(answers.license)})

  ## Contribution
  Please follow these guidelines for collaboration:  
  ${answers.contribution}

  ## Tests
  I have written the following test(s) for this application:  
  ${answers.tests}

  ## Questions
  If issues arise, please reach me at the contact information below:  
  **GitHub**:  ${answers.github}
  **Email**:  ${answers.email}
`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  generateMarkdown,
};
