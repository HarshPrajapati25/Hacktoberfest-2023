class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def printPreorder(node):
    if node is None:
        return
    print(node.data, end=' ')

    printPreorder(node.left)

    printPreorder(node.right)

if __name__ == '__main__':
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.left.right = Node(5)
    root.right.right = Node(6)

    print("Preorder traversal of binary tree is:")
    printPreorder(root)