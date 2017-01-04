$ = $ || function jQuery(){};

$p = $.prototype;

$p.each = function(funct) {
  for(var i = 0; i < this.el.length; i++){
    funct(this.el.idx(i), i);
  }
};

$p.any = function(funct){
  for(var i = 0; i < this.el.length; i++){
    if(funct(this.el.idx(i))){
      return true;
    }
  }
  return false;
};
