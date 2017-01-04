$ = $ || function jQuery(){}
$p = $.prototype;
$.each = function() {

};
$.map = function() {

};
$p.any = function(funct){
  for(var i = 0; i < this.elem.length; i++){
    if(funct(this.elem.idx(i))){
      return true;
    }
  }
  return false;
};

$p.hasClass = function(className) {
  return this.any(function(elem){
    return elem.classList.contains(className);
  }
};
