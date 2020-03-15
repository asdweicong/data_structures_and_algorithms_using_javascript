/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-15 14:46:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-15 15:02:14
 */
var names = [];
names.push("A");
names.push("B");
console.log(names);
names.shift();//删除第一个元素
console.log(names);

function Queue(){
    var that = this;
    that.dataStore = [];
    that.listSize = 0;
    that.enqueue = enqueue;//队尾添加元素
    that.dequeue = dequeue;//删除队首元素
    that.front = front;//获取队首元素
    that.back = back;//获取队尾元素
    that.toString = toString;//获取所以元素
    that.empty = empty;//判断队列是否为空
};
function enqueue(element){
    this.listSize +=1;
    this.dataStore.push(element);
};
function dequeue(){
    this.listSize -=1;
    return this.dataStore.shift();
};
function front(){
    return this.dataStore[0];
};
function back(){
    return this.dataStore[this.listSize - 1];
};
function toString(){
    var retStr = '';
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + ','
    }
    return retStr;
};
function empty(){
    if(this.listSize == 0){
        return true;
    }else{
        return false;
    }
};
var q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log('Front of queue: ' + q.front());
console.log('Back of queue: ' + q.back());