// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "Apache") {
return (link to display badge)
} else if (license === "GNU") {
  
} else if (license === "MIT") {

} else {
ISC
}

}

// Returns the license link
function renderLicenseLink(license) {}

// Returns the license section of README
function renderLicenseSection(license) {}


// Generates markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
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
  ${badge}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
