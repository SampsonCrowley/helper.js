var jQuery = function(selector = null){

  if(!(this instanceof jQuery)){
    return new jQuery(selector);
  }

  this.elem = {
    elements: [],
    length: 0,
    idx: function(i){
      return this.elements[i];
    }

  };

  this.setElement = function(domNode) {
    this.elem.elements = domNode;
    this.elem.length = this.elem.elements.length;
    return this.elem;
  };

  this.map = function(collection,funct){
    let newArr = []
    for(i = 0; i < collection.length; i++){
      newArr.push(funct(collection[i], i));
    }
    return newArr;
  };

  this.ready = function(funct) {

    // Mozilla, Opera and webkit nightlies currently support this event
    if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", function(){
        document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
        funct();
      }, false );

      // If IE event model is used
    } else if ( document.attachEvent ) {
      var d = window.document;
      var done = false;
      // only fire once
      var init = function () {
        if (!done) {
          done = true;
          funct();
        }
      };
      // polling for no errors
      (function () {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left');
        } catch (e) {
          setTimeout(arguments.callee, 50);
          return;
        }
        // no errors, fire
        init();
      })();
      // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null;
          init();
        }
      };

    }else {
      window.addEventListener('load', funct, false);
    }
  };

  this.setSelector = function(){
    if (selector instanceof HTMLCollection) {
      return this.setElement(this.map(selector, function(elem){
        return elem;
      }));
    }
    if (selector instanceof Element || selector.nodeType) {
      return this.setElement([selector]);
    }

    var m, s;
    if (selector[0].match(/[a-zA-Z]/)){
      m = "tag"; s = selector;
    } else {
      m = selector[0]; s = selector.slice(1);
    }
    return this.setElement({
      ".": function(className) {
        return document.getElementsByClassName(className);
      },
      "#": function(id) {
        return [document.getElementById(id)];
      },
      tag: function(tag){
        return document.getElementsByTagName(tag);
      }
    }[m](s));
  }

  if (selector) {
    this.setSelector(selector);
  }

  return this;

};
$ = jQuery;
