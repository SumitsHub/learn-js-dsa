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

### 04 - partitionList
Implement a member function called partitionList(x) that partitions the linked list such that all nodes with values less than x come before nodes with values greater than or equal to x. 

Note: this linked list class does not have a tail which will make this method easier to implement.

The original relative order of the nodes should be preserved.

Input:

An integer x, the partition value.

Output:

The function should modify the linked list in-place, such that all nodes with values less than x come before nodes with values greater than or equal to x. 

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.

You can create temporary nodes to make the implementation simpler.


Example 1:

Input:

Linked List: 3 -> 8 -> 5 -> 10 -> 2 -> 1 x: 5

Process:

Values less than 5: 3, 2, 1

Values greater than or equal to 5: 8, 5, 10

Output:

Linked List: 3 -> 2 -> 1 -> 8 -> 5 -> 10


Example 2:
Input:

Linked List: 1 -> 4 -> 3 -> 2 -> 5 -> 2 x: 3

Process:

Values less than 3: 1, 2, 2

Values greater than or equal to 3: 4, 3, 5

Output:

Linked List: 1 -> 2 -> 2 -> 4 -> 3 -> 5

Tips:

While traversing the linked list, maintain two separate chains: one for values less than x and one for values greater than or equal to x.

Use dummy nodes to simplify the handling of the heads of these chains.

After processing the entire list, connect the two chains to get the desired arrangement.