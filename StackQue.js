///In this toy problem we had to create a stack and a queue. Then use the stack function as the input for the queue.

//create a stack
var Stack = function(){
  this['storage'] = {};
  this.count = 0
};

Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function(){
  this.count--;
  var string = this.storage[this.count];
  delete this.storage[this.count]
  return string;
};

Stack.prototype.size = function(){
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};

// var stack1 = new Stack()
// console.log(stack1)
// var stack2 = new Stack()
// console.log(stack2)

//create a queue 
var Queue = function(){
  this['results'] = {};
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}


Queue.prototype.enqueue = function(value){
  this.results[this.stack1] = value;
  this.stack1++;
}

Queue.prototype.dequeue = function(){
  var string = this.results[this.stack2];
  delete this.results[this.stack2];
  this.stack2++;
  return string;
}

Queue.prototype.size = function(){
  if (this.stack2 > this.stack1 || this.stack1 === 0) {
    return 0;
  }
  return this.stack1 - this.stack2;
}
//stacks will be the input and output for the queue
var queue = new Queue(new Stack())
console.log(queue)
var queue2 = new Queue(new Stack())
console.log(queue2)