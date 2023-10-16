## 01 - findMiddleNode
Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.

Note: this LinkedList implementation does not have a length member variable.

Output:

Return the middle node of the linked list.

If the list has an even number of nodes, return the second middle node (the one closer to the end).

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.


Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the findMiddleNode() function:

let middle = list.findMiddleNode();
The middle node should have the value 3.

Example 2:

Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the findMiddleNode() function:

let middle = list.findMiddleNode();
The middle node should have the value 4.

## 02 - hasLoop
Implement a member function called hasLoop() that checks if the linked list has a loop or not.

Output:

Return true if the linked list has a loop.

Return false if the linked list does not have a loop.

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.

## 03 - findKthFromEnd
Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.

Note: this LinkedList implementation does not have a length member variable.

Output:

Return the kth node from the end of the linked list.

If the value of k is greater than or equal to the number of nodes in the list, return null.

Constraints:
1. You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
2. You can only traverse the linked list once.

Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the findKthFromEnd(2) function:

let kthNode = list.findKthFromEnd(2);
The kthNode should have the value 4.

Example 2:

Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the findKthFromEnd(4) function:

let kthNode = list.findKthFromEnd(4);
The kthNode should have the value 3.