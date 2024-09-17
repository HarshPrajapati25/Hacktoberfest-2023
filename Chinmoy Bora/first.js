
//For a given Linked List, write a code to return the node value where the cycle in question begins?component
function detectCycle(head) {
    let slow = head;
    let fast = head;

    // Find the meeting point of the two pointers
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }

    // If there is no cycle, return null
    if (fast === null || fast.next === null) {
        return null;
    }

    // Move one pointer to the head of the linked list
    slow = head;

    // Move both pointers at the same speed until they meet at the start of the cycle
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // Return the node where the cycle begins
    return slow;
}
