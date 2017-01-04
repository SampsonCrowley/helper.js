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
    });
  }
  return this.el.idx(0).value;
};

$p.css = function(prop, val = undefined){
  if(val !== undefined){
    this.each(function(el) {
      el.style[prop] = val;
    });
  }
  return this.el.idx(0).style[prop];
};

$p.height = function(val = undefined){
  return this.css('height', val);
};

$p.width = function(val = undefined){
  return this.css('width', val);
};

$p.attr = function(attr, val = undefined){
  if (val === null) {
    this.each(function(el) {
      el.removeAttribute(attr);
    });
  } else if (val !== undefined) {
    this.each(function(el) {
      el.setAttribute(attr, val);
    });
  }
  return this.el.idx(0).getAttribute(attr);
};

$p.html = function(html = undefined) {
  if (html !== undefined) {
    this.each(function(el) {
      el.innerHTML = html;
    });
  }
  return this.el.idx(0).innerHTML;
};




