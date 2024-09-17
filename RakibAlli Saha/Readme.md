- ## Q.
" You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]



- ## Q.
"Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
Either x is not zero or n > 0.
-104 <= xn <= 104"



- ## Q.
"Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.

 

Example 1:

Input: s1 = ""great"", s2 = ""rgeat""
Output: true
Explanation: One possible scenario applied on s1 is:
""great"" --> ""gr/eat"" // divide at random index.
""gr/eat"" --> ""gr/eat"" // random decision is not to swap the two substrings and keep them in order.
""gr/eat"" --> ""g/r / e/at"" // apply the same algorithm recursively on both substrings. divide at random index each of them.
""g/r / e/at"" --> ""r/g / e/at"" // random decision was to swap the first substring and to keep the second substring in the same order.
""r/g / e/at"" --> ""r/g / e/ a/t"" // again apply the algorithm recursively, divide ""at"" to ""a/t"".
""r/g / e/ a/t"" --> ""r/g / e/ a/t"" // random decision is to keep both substrings in the same order.
The algorithm stops now, and the result string is ""rgeat"" which is s2.
As one possible scenario led s1 to be scrambled to s2, we return true.
Example 2:

Input: s1 = ""abcde"", s2 = ""caebd""
Output: false
Example 3:

Input: s1 = ""a"", s2 = ""a""
Output: true
 

Constraints:

s1.length == s2.length
1 <= s1.length <= 30
s1 and s2 consist of lowercase English letters."

- ## Q 
Find a duplicate number in an array of integers

