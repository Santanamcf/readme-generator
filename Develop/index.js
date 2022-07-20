// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the project title?"
     },
     {
         type:"input",
         name:"description",
         message:"Give a quick yet descriptive summary of the project."
     },
     {
      type:"input",
      name:"usage",
      message:"How do I use this project?"
     },
     {
      type:"input",
      name:"installation",
      message:"Give a quick yet descriptive summary of the project."
     },
     {
      type:"input",
      name:"contributions",
      message:"List any contributions here."
     },
     {
      type:"input",
      name:"testing",
      message:"How do we test your project?"
     },
     {
      message:"Which license would you like to use?",   
      type:"list",
      name:"license",
      choices:["MIT License","Eclipse License","IBM License"]
     },
     {
      type:"input",
      name:"git",
      message:"What is your github username?"
     },
     {
      type:"input",
      name:"email",
      message:"What is your email?"
  }
    
];


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then(ans=>{
        console.log(ans)
        const mkDown = generateMarkdown(ans)
        console.log(mkDown)
        fs.writeFile("README.md",mkDown,err => {
            if (err){
                console.error("error");
            }
        } )
    })
}

// Function call to initialize app
init();
