var jQuery = function(selector = null){

  if(!(this instanceof jQuery)){
    return new jQuery(selector);
  }

  this.elem = null;

  this.getElement = function(tag){
    console.log("by tag");
    this.elem = document.getElementsByTagName(tag);
    return this.elem;
  };

  this.getByClass = function(className){
    console.log("by class");
    this.elem = document.getElementsByClassName(className);
    return this.elem;
  };

  this.getById = function(id){
    console.log("by id");
    this.elem = document.getElementById(id);
    return this.elem;
  };

  this.ready = function(funct) {
    document.addEventListener('DOMContentLoaded', funct) ||
    window.addEventListener('load', funct) ||
    document.attachEvent('onreadystatechange', funct) ||
    window.attachEvent('onload', funct);
  };

  if (selector) {
    if(selector[0].match(/[a-zA-Z]/)){
      return this.getElement(selector);
    } else {
      return {
        ".": this.getByClass,
        "#": this.getById
      }[selector[0]](selector.slice(1));
    }
  }

};



jQuery().ready(function() {
  jQuery('h1');
});
