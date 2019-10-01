const stack = [];
let smaller = [];

const getSmaller = () => {
    return smaller[smaller.length - 1] || null;
};

const Stack = {
    addValue: value => {
        if(getSmaller() === null || getSmaller() >= value) {
            smaller.push(value);
        }
        stack.push(value)
    },
    removeTopValue: () => {
        if(getSmaller() === stack[stack.length -1]) {
            smaller.splice(smaller.length - 1)
        }
        stack.splice(stack.length - 1)
    },
    viewTopValue: () => stack[stack.length - 1] || null,
    viewSmallerValue: () => getSmaller(),
    viewStack: () => stack
};

module.exports = Stack;
