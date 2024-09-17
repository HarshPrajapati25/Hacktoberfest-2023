// " You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
// JavaScript program for the above approach
// Link List node
class Node{
	constructor(key){
		this.key = key;
		this.next = null;
	}
}

function newNode(key){
	let temp = new Node(key);
	return temp;
}



let a = newNode(1);
a.next = newNode(2);
a.next.next = newNode(4);


let b = newNode(1);
b.next = newNode(3);
b.next.next = newNode(4);

let v = [];
while(a != null){
	v.push(a.key);
	a = a.next;
}

while(b != null){
	v.push(b.key);
	b = b.next;
}

v.sort(function(a, b){return a - b});
let result = newNode(-1);
let temp = result;
for(let i = 0; i<v.length; i++){
	result.next = newNode(v[i]);
	result = result.next;
}
temp = temp.next;
console.log("Resultant Merge Linked List is : ");
while(temp != null){
	console.log(temp.key + " ");
	temp = temp.next;
}


