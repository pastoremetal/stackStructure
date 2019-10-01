const inquirer = require("inquirer");
const Stack = require("./Stack");

const options = [
    {name: "Add value", value: "addValue"},
    {name: "Remove top value", value: "removeTopValue"},
    {name: "View top value", value: "viewTopValue"},
    {name: "View smaller value", value: "viewSmallerValue"},
    {name: "Exit", value: "exit"}
];

const Menu = {
    start: () => {
        inquirer.prompt({
            type: "list",
            message: "Choose your operation:",
            name: "operation",
            choices: [
                ...options,
                new inquirer.Separator(),
                {
                    name: "Actual stack:",
                    disabled: Stack.viewStack().join(", ")
                }
            ]

        }).then(answer => {
            switch (answer.operation) {
                case "addValue":
                    inquirer.prompt({
                        type: "number",
                        message: "Insert a number:",
                        name: "value"
                    }).then(number => {
                        Stack.addValue(number.value);
                        Menu.start();
                    });
                    break;

                case "viewTopValue":
                    console.log(Stack.viewTopValue());
                    Menu.start();
                    break;

                case "removeTopValue":
                    Stack.removeTopValue();
                    Menu.start();
                    break;

                case "viewSmallerValue":
                    console.log(Stack.viewSmallerValue());
                    Menu.start();
                    break;

                case "exit":
                    return 0;

                default:
                    Menu.start();
                    return 0;
            }
            return 0;
        });
    }
};

module.exports = Menu;