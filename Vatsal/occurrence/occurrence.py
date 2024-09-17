def count(s, ch) :

    res = 0
     
    for i in range(len(s)) :
         
        if (s[i] == ch):
            res = res + 1
    return res
     
     
str= "vatsaldarji"
ch = 'a'
print(count(str, ch))