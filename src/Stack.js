const stack = [];
const getSmaller = () => {
    let smaller = stack[0];
    for(const value of stack) {
        smaller = value < smaller ? value : smaller;
    }
    return smaller;
};

const Stack = {
    addValue: value => stack.push(value),
    removeTopValue: () => stack.splice(stack.length - 1),
    viewTopValue: () => stack[stack.length - 1],
    viewSmallerValue: () => getSmaller(),
    viewStack: () => stack
};

module.exports = Stack;
