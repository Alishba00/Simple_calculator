#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter second Number", type: "number", name: "secondNumber" },
    {
        message: "Choice the following operators",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtration", "Multiplication", "Divided"],
    },
]);
//condition statement..
if (answer.operator === "Addition") {
    console.log(chalk.bgYellowBright.redBright.underline(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtration") {
    console.log(chalk.bgBlueBright.magenta.underline(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.bgGreenBright.yellowBright.underline(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Divided") {
    console.log(chalk.bgRedBright.gray.underline(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.bgBlueBright.magentaBright.underline.bold("Please enter a valid operator"));
}
