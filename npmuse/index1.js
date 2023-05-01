// we use (npx nodemon filename) for live server.
const chalk=require("chalk");
console.log(chalk.blue.inverse.underline("hello hardik dada!"));


// validator use for checking the email valid or not.
const validator=require("validator");
const rs = validator.isEmail("vivekjain.0042@gmailjj.com");

console.log(rs ? chalk.black.inverse(rs) : chalk.blue.inverse(rs));

