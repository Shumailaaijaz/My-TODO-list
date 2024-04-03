#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bold.italic(`
**********
TO DO LIST
**********`));
let todoArray = [];
while (true) {
    let answer = await inquirer.prompt([
        {
            name: "select",
            type: 'list',
            message: "WELLCOME\n 'TO DO LIST' \n  what whould you like to do? \n Enter 'new' to add in list. \n 'list' to display list. \n Enter 'delete to delete from list.\n Enter 'delete to delete from list.\m Enter 'quit' to close the application",
            choices: ["new", "list", "delete", "quit"]
        }
    ]);
    if (answer.select === "new") {
        let newTodo = await inquirer.prompt([
            {
                name: "new",
                type: "input",
                message: "Enter new item"
            }
        ]);
        todoArray.push(newTodo.new);
        console.log(chalk.green.bold(`"${newTodo.new}"" added in the list`));
    }
}
