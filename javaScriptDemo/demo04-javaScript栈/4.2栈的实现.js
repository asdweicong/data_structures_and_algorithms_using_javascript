/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-15 10:49:11 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-15 11:06:11
 */
function Stack(){
    var that = this;
    that.dataStore = [];
    that.top = 0;
    that.push = push;//添加栈顶元素 同时变量top加一
    that.pop = pop;//返回栈顶元素 同时变量top减一
    that.peek = peek;//获取栈顶元素
    that.length = length;
    that.clear = clear;
    that.toString = toString;
};
function push(element){
    this.dataStore[this.top++] = element;
};
function pop(){
    return this.dataStore[--this.top];
};
function peek(){
    return this.dataStore[this.top - 1];
};
function length(){
    return this.top;
};
function clear(){
    this.top = 0;
};
function toString(){
    return this.dataStore;
};
var s = new Stack();
s.push('A');
s.push('B');
s.push('C');
console.log('length:'+s.length());
console.log(s.toString(),s.peek());
var popped = s.pop();
console.log('The popped element is:' + popped);
console.log(s.toString(),s.peek());
s.push('D');
console.log(s.toString(),s.peek());
s.clear();
console.log('length:' + s.length());
console.log(s.peek());
s.push('E');
console.log(s.peek())
