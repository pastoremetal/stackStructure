const Stack = require("../Stack");

describe('5 non sequential integers and floats with repeated values', () => {
    const numbers = [43, 23, 9, 7, 2, 8, 65, 0.2, 1, 1, 59.3, 0.1, 0.1];
    for (const i of numbers) {
        Stack.addValue(i);
    }

    it('add more 5 non sequential integers and should match snapshot', () => {
        expect(Stack.viewStack()).toMatchSnapshot();
    });

    it('should get value on top of stack', () => {
        expect(Stack.viewTopValue()).toBe(numbers[numbers.length -1]);
    });

    it('should remove value from top of stack', () => {
        Stack.removeTopValue();
        expect(Stack.viewStack()).toMatchSnapshot();
    });

    it('should get smaller value of stack', () => {
        expect(Stack.viewSmallerValue()).toBe(0.1);
    });
});