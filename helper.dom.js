$_ = $_ || function Helper(){};
$_p = $_.prototype;

$_.hasClass = function(el, className) {
  return el.classList.contains(className);
};

$_p.hasClass = function(className) {
  return this.any(function(el){
    return $_.hasClass(el, className);
  });
};

$_p.addClass = function(className) {
  this.each(function(el) {
    if (!$_.hasClass(el, className)) {
      el.classList.add(className);
    }
  });
  return this;
};

$_p.removeClass = function(className) {
  this.each(function(el) {
    el.classList.remove(className);
  });
  return this;
};

$_p.toggleClass = function(className) {
  this.each(function(el) {
    if ($_.hasClass(el, className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  });
  return this;
};

$_p.val = function(val = undefined){
  if(val !== undefined){
    this.each(function(el) {
      el.value = val;
    });
    return this;
  }
  return this.el.idx(0).value;
};

$_p.css = function(prop, val = undefined){
  if(val !== undefined){
    this.each(function(el) {
      el.style[prop] = val;
    });
    return this;
  }
  return this.el.idx(0).style[prop];
};

$_p.height = function(val = undefined){
  return this.css('height', val);
};

$_p.width = function(val = undefined){
  return this.css('width', val);
};

$_p.attr = function(attr, val = undefined){
  if (val === null) {
    this.each(function(el) {
      el.removeAttribute(attr);
    });
    return this;
  } else if (val !== undefined) {
    this.each(function(el) {
      el.setAttribute(attr, val);
    });
    return this;
  }
  return this.el.idx(0).getAttribute(attr);
};

$_p.html = function(html = undefined) {
  if (html !== undefined) {
    this.each(function(el) {
      el.innerHTML = html;
    });
    return this;
  }
  return this.el.idx(0).innerHTML;
};

$_p.text = function(text = undefined) {
  if (text !== undefined) {
    this.each(function(el) {
      el.innerText = text;
    });
    return this;
  }
  return this.el.idx(0).innerText;
};

$_p.after = function(el){
  this.each(function(sibling){
    sibling.parentNode.insertBefore(el, sibling.nextSibling)
  })
  return this;
}

$_p.append = function(el) {
  this.each(function(parent){
    parent.appendChild(el);
  })
  return this;
}

$_p.replaceWith = function(el) {
  this.each(function(parent){
    parent.outerHTML = el.outerHTML;
  })
  return this;
}

$_p.remove = function(){
  this.each(function(el){
    el.parentNode.removeChild(el);
  })
}

$_p.children = function(){
  return $_(this.el.idx(0).childNodes);
}

$_p.parent = function(){
  return $_(this.el.idx(0).parentNode);
}
