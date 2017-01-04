$ = $ || function jQuery(){};
$.hasClass = function(el, className) {
  el.classList.contains(className);
};
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

$p.hasClass = function(className) {
  return this.any(function(el){
    return $.hasClass(el, className);
  });
};

$p.addClass = function(className) {
  this.each(function(el) {
    if (!$.hasClass(el, className)) {
      el.classList.add(className);
    }
  });
  return this;
};

$p.removeClass = function(className) {
  this.each(function(el) {
    el.classList.remove(className);
  });
};


