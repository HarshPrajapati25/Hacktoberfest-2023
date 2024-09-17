//added shuffle method to shuffle the elements of the list
void main(){
  shuffleArray([12,786,53,74,23,88]);
}
void shuffleArray(List<int> str){
  str.shuffle();
  print(str);
}
//output [88, 12, 786, 53, 74, 23]