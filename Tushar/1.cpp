#include <bits/stdc++.h>
using namespace std;

void capitaltosmall(string &str){
    for(int i = 0;i<=str.length();i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            str[i] = str[i] + 32;
        }
    }
}

int main(){
    string str;
    int vowel = 0, consonant = 0;

    cout << "Enter a string: " << endl;
    cin >> str;

    capitaltosmall(str);

    for(int i = 0;i<=str.length();i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u'){
            vowel++;
        }
        else{
            consonant++;
        }
    }


    cout << "Vowels: " << vowel << endl;
    cout << "Consonants: " << consonant << endl;
}