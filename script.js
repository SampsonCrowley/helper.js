function Foo() {
  this.sample = true;
  this.southernify = function(text){
    console.log(text + ", Y'all!");
    return text + ", Y'all!";
  }
}

function Bar() {
  return {
    sample: true,
    southernify: function(text){
      console.log(text + ", Y'all!");
      return text + ", Y'all!";
    }
  }
}

function Baz() {
  if(!(this instanceof Baz)){
    return new Baz();
  }
  this.sample = true;
  this.southernify = function(text){
    console.log(text + ", Y'all!");
    return text + ", Y'all!";
  }
}

foo = new Foo();
bar = Bar();
baz = Baz();
console.log(baz instanceof Baz);
// console.log(bar instanceof Bar);
// console.log(foo instanceof Foo);
// console.log(foo);
// console.log(bar);
console.log(baz);


function SimpleObject(arr = []) {
  if(!(this instanceof Baz)){
    return new SimpleObject(arr);
  }
  this.collection = [];
  this.each = function(funct){
    for(i = 0; i < this.collection.length; i++){
      funct(this.collection[i]);
    }
  }

  if((arr.typeOf(Array) || arr.typeOf(String)) && arr.length > 0){
    for(i = 0; i < arr.length; i++){
      this.collection.push(arr[i])
    }
  }
}

s = new SimpleObject([1,2,3])
