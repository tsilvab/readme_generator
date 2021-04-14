function generateMarkdown(userResponses, userInfo) {

  // Table of contents
  let tableOfContent = `Table of Contents`;

  if (userResponses.installation !== '') {
    tableOfContent += `* [Installation](#installation)`
  };

  if (userResponses.usage !== '') {
    tableOfContent += `* [Usage](#usage)`
  };

  if (userResponses.contributing !== '') {
    tableOfContent += `* [Contributing](#contributing)`
  };

  if (userResponses.tests !== '') {
    tableOfContent += `* [Tests](#tests)`
  };


  // Generate markdown 
  let markDown = `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor)
  
  ##Description 
  
  ${userResponses.description}`

  //Table of Contents
  markDown += tableOfContent;

  //License
  markDown += `## License
  ${userResponses.license}`;


  // Installation
  if (userResponses.installation !== '') {

    markDown += `## Installation 
    ${userResponses.installation}`
  };


  // Usage
  if (userResponses.usage !== '') {

    markDown += `## Usage 
  ${userResponses.usage}`
  };


  // Contributing
  if (userResponses.contributing !== '') {

    markDown += `## Contributing
   ${userResponses.contributing}`
  };


  //Tests
  if (userResponses.tests !== '') {

    markDown += `## Tests
  ${userResponses.tests}`
  };


  // About Developer
  let devSection = `## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
 You can contact me with any questions:

  GitHub: [@${userInfo.login}](${userInfo.url})`;

  //GitHub email
  if (userInfo.email !== null) {

    devSection += `Email: ${userInfo.email}`
  };

  // developer section
  markDown += devSection;

  return markDown;
}
module.exports = generateMarkdown;
