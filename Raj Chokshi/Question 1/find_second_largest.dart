//find second largest number
void main(){
  largestNumber([12,23,58,96,72,12,33]);
}
void largestNumber(List<int> num){
  num.sort();
  print(num[num.length - 2]);
}
//output 72
