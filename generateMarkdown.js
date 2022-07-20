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
  return `# ${data.title}

  ## Description
  ${data.description}
  
  
  ## Table of Contents
  * [installation](#installation)
  * [usage](#usage)
  * [contributions](#contributions)
  * [testing](#testing)
  * [license](#license)
  * [git](#git)
  * [email](#email)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributions
  ${data.contributions}
  ## Tests

    ${data.testing}
  
  
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.git}
`;
}

module.exports = generateMarkdown;
