$ = $ || function jQuery(){};
$p = $.prototype;

$.hasClass = function(el, className) {
  return el.classList.contains(className);
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
  return this;
};

$p.toggleClass = function(className) {
  this.each(function(el) {
    if ($.hasClass(el, className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  });
  return this;
};

$p.val = function(val = undefined){
  if(val !== undefined){
    this.each(function(el) {
      el.value = val;
    }
  }
  return this.el.idx(0).value;
}

$p.css = function(prop, val = undefined){
  if(val !== undefined){
    this.each(function(el) {
      el.style[prop] = val;
    }
  }
  return this.el.idx(0).style[prop];
}

$p.height = function(prop, val = undefined){
  if(val !== undefined){
    this.each(function(el) {
      el.style[prop] = val;
    }
  }
  return this.el.idx(0).style[prop];
}
