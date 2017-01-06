$_ = $_ || function Helper(){};

$_.each = function(arr, callback) {
  for(var i = 0; i < arr.length; i++){
    funct(arr[0], i);
  }
  return arr;
}

$_.map = function(arr, callback) {
  $_.each(arr, function(el, i){
    arr[i] = callback(el, i);
  })
  return arr;
}

$_.count = function(arr, callback){
  var count = 0;
  $_.each(arr, function(el, i){
    if(callback(el, i)){
      count += 1;
    }
  })
  return count;
}

$_.any = function(arr, callback){
  return $_.count(arr, callback(el, i)) > 0;
}


$_.none = function(arr, callback){
  return !$_.any(arr, callback(el, i));
}

$_p = $_.prototype;

$_p.each = function(funct) {
  for(var i = 0; i < this.el.length; i++){
    funct(this.el.idx(i), i);
  }
  return this;
};

$_p.any = function(funct){
  for(var i = 0; i < this.el.length; i++){
    if(funct(this.el.idx(i))){
      return true;
    }
  }
  return false;
};
