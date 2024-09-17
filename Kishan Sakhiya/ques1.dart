void main() {
  print("Find a min and max number without Math function in list");

  List<int> num = [400,30,300,80,10];

  int max = num[0];
  int min = num[0];


  for(int i=0; i<num.length; i++){

    if(max < num[i]){
      max = num[i];
    }else if(min > num[i]){
      min = num[i];
    }
  }
  print(max);
  print(min);
}
