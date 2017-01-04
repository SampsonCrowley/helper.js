var jQuery = function(selector = null){

  if(!(this instanceof jQuery)){
    return new jQuery(selector);
  }

  this.elem = {
    element: null,
    elements: [],
    length: 0,
    idx: function(i){
      return this.elements[i];
    }

  };

  this.setElement = function() {
    this.elem.element = this.elem.elements[0];
    this.elem.length = this.elem.elements.length;
  };

  this.getElement = function(tag){
    console.log("by tag");
    this.elem.elements = document.getElementsByTagName(tag);
    this.setElement();
    return this.elem;
  };

  this.getByClass = function(className){
    console.log("by class");
    this.elem.elements = document.getElementsByClassName(className);
    this.setElement();
    return this.elem;
  };

  this.getById = function(id){
    console.log("by id");
    this.elem.elements = [document.getElementById(id)];
    this.setElement();
    return this.elem;
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

  if (selector) {
    if (selector instanceof Element) {

    }
    else if (selector[0].match(/[a-zA-Z]/)){
      return this.getElement(selector);
    } else {
      return {
        ".": function(className) {
          this.setElement(document.getElementsByClassName(className));
        },
        "#": function(id) {
          this.setElement([document.getElementById(id)]);
        }
      }[selector[0]](selector.slice(1));
    }
  }

};


console.log(jQuery('h1'));
jQuery().ready(function() {
  console.log(jQuery('h1'));
});
