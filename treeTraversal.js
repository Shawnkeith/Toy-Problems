var Tree = function(value){
this.value = value;
this.children = [];
};

Tree.prototype.map = function(callback){
let results = new Tree(callback(this.value))
console.log(this.children)
this.children.forEach(children)
for(var i = 0; i < this.children.length; i++){
var element = this.children[i]
results.children = this.addChild(this.children.map(callback))
// console.log(callback(element.value))
// results.children.value = (callback(element.value))
}
return results
}

Tree.prototype.addChild = function(child){
if (!child || !(child instanceof Tree)){
child = new Tree(child);
}

if(!this.isDescendant(child)){
this.children.push(child);
}else {
throw new Error("That child is already a child of this tree");
}
// return the new child node for convenience
return child;
};

/**
* check to see if the provided tree is already a child of this
* tree __or any of its sub trees__
*/
Tree.prototype.isDescendant = function(child){
if(this.children.indexOf(child) !== -1){
// `child` is an immediate child of this tree
return true;
}else{
for(var i = 0; i < this.children.length; i++){
if(this.children[i].isDescendant(child)){
// `child` is descendant of this tree
return true;
}
}
return false;
}
};

/**
* remove an immediate child
*/
Tree.prototype.removeChild = function(child){
var index = this.children.indexOf(child);
if(index !== -1){
// remove the child
this.children.splice(index,1);
}else{
throw new Error("That node is not an immediate child of this tree");
}
};


var double = function (value) { return value * 2; };
// create a tree with some values, and a tree with our *expected* output
// depth: 0
var input = new Tree(1);
var output = new Tree(2);
// depth: 1
input.addChild(2);
input.addChild(3);
// expected values
output.addChild(4);
output.addChild(6);
// depth: 2
input.children[0].addChild(4);
input.children[0].addChild(5);
input.children[1].addChild(6);
input.children[1].addChild(8);
// expected values
output.children[0].addChild(8);
output.children[0].addChild(10);
output.children[1].addChild(12);
output.children[1].addChild(16);
// depth: 3 (sparse)
input.children[0].children[0].addChild(9);
input.children[1].children[1].addChild(10);
// expected values
output.children[0].children[0].addChild(18);
output.children[1].children[1].addChild(20);

var result = input.map(double);
console.log('input:', input);
console.log('output:', output);
console.log('Your result:', result);





// A resource on breadth first tree traversal
// https://www.cs.bu.edu/teaching/c/tree/breadth-first/

// You have a Queue constructor to help implement BFSelect