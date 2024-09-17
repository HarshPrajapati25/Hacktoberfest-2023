function mergeTwoLists(list1, list2) {
    let mergedList = new ListNode(-1); // create a dummy node to start the merged list
    let current = mergedList; // set current to the dummy node

    while (list1 !== null && list2 !== null) { // while both lists have nodes
        if (list1.val <= list2.val) { // if the value in list1 is less than or equal to the value in list2
            current.next = list1; // set the next node in the merged list to list1
            list1 = list1.next; // move to the next node in list1
        } else { // if the value in list2 is less than the value in list1
            current.next = list2; // set the next node in the merged list to list2
            list2 = list2.next; // move to the next node in list2
        }
        current = current.next; // move current to the next node in the merged list
    }

    // add any remaining nodes from list1 or list2 to the end of the merged list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return mergedList.next; // return the merged list, skipping the dummy node
}

// define the ListNode class
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// create the input lists
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// merge the lists and print the result
console.log(mergeTwoLists(list1, list2)); // output: ListNode { val: 1, next: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 4, next: null } } } } } } }

