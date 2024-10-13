// TODOS LIST PROJECT NO:04
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.blue("\n \tWelcome to Code with Sohail - Todo-List Application\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            type: "input",
            name: "task",
            message: "Enter your New Task:"
        },
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List Sucessfully`);
    let addMoreTask = await inquirer.prompt([
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to Add More Task?",
            default: "false"
        }
    ]);
    condition = addMoreTask.addMore;
}
console.log('your updated Todo-List:', todoList);
