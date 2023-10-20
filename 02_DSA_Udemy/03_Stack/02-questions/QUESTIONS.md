## #01 Stack: Push for a Stack That Uses an Array
Write the push method to add an item onto a stack that is implemented with an array.

The method should add the given value to the top of the stack, increasing the size of the stack by one.

Constraints:

The stack should be implemented using an array.

You cannot use built-in methods to manipulate the stack, except for the push() method of the array.

Class Definition:
```js
class Stack {
    constructor() {
        this.stackList = [];
    }
 
    // ... other methods ...
 
    push(value) {
        // Your implementation goes here
    }
}

```

Example 1:

Suppose you have a Stack object, stack, with the following values: [1, 2, 3]

After calling the push() function:

stack.push(4);

The stack should now have the following values: [1, 2, 3, 4]


Example 2:

Now suppose you have a Stack object, stack, with the following values: ['apple', 'banana', 'orange']

After calling the push() function:

stack.push('grape');

The stack should now have the following values: ['apple', 'banana', 'orange', 'grape']

## #02