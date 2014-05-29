function which_triangle(len1, len2, len3){
  var arr = [];
  var sides = [len1, len2, len3];
  for(var i=0; i<sides.length; i++){
    if(arr.indexOf(sides[i]) == -1){
      arr.push(sides[i]);
    };
  };
  return triangle_types[arr.length];
};

var triangle_types = {
  1: "equilateral",
  2: "isosceles",
  3: "scalene"
}