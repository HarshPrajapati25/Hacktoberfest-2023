#include<iostream>
using namespace std;

void nthlargestElement(int arr[], int n, int k){
    //sort(arr, arr+n);
    cout<<"Enter the total number of elements in the array:"<<endl;
    cin>>n;

    for (int  i = 0; i < n; i++)
    {
        cin>>arr[i];
    }
    

    for(int i=0; i<n; i++){
        if(arr[i]>arr[i+1]){
            int temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    cout<<"The nth largest element is: "<<arr[n]<<endl;
}

int main(){
    int arr[100];
    int n,k;
    nthlargestElement(arr, n, k);
    return 0;
}
