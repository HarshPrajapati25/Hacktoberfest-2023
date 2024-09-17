// short array without the use of a short function

#include<bits/stdc++.h>
using namespace std;

int main(){
    int arr[100], n, temp;
    
    cout << "Enter the size of array: " << endl;
    cin >> n;

    cout << "Enter numbers: " << endl;
    for(int i = 0;i< n;i++){
        cin >> arr[i];
        
    }

    //bubble sort logic
    for(int i = 0;i< n;i++){
        for(int j = 0;j< n-i-1;j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
            }
        }
    }

   cout << "Sorted array: " << endl;
  for(int i = 0;i< n;i++){
      cout << arr[i] << endl;
  }
}