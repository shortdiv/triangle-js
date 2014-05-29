function which_triangle(len1, len2, len3){
  var arr = [];
  // var sides = [len1, len2, len3];
  for(var i=0; i<arguments.length; i++){
    if(arr.indexOf(arguments[i]) == -1){
      arr.push(arguments[i]);
    };
  };
  return triangle_types[arr.length];
};

function side_is_valid(len){
  return !isNaN(parseInt(len, 10)) && len > 0
}

function triangle_is_valid(len1,len2,len3){
  for (var i=0; i<arguments.length; i++){
    if (!side_is_valid(arguments[i])){
      return("Triangle has an invalid side!");
    }
  }
}


var triangle_types = {
  1: "equilateral",
  2: "isosceles",
  3: "scalene"
}