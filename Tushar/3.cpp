// write a program that generates prime number by given input

#include<bits/stdc++.h>
using namespace std;

int main ()
{
  int num;

  cout << "enter a number: " << endl;
  cin >> num;

  for (int i = 2; i <= num / 2; i++){
    if (num % i == 0){
	  cout << num << " is not a prime number" << endl;
       break;}
      else
	{
	  cout << num << " is a prime number" << endl;
        break;
	}
}
}
