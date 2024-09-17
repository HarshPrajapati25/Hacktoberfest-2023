number=int(input("Enter a number: "))
List=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

for i in List:
    if i==number:
        print("Number is present in the list")
        print("Index of the number is: ",List.index(number))
        break

def searchnumber(List,number):
    for i in List:
        if i==number:
            return True
    return False
    
searchnumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14],2)