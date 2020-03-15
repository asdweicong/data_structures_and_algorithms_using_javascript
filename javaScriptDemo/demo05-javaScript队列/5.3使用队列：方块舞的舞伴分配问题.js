/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-15 15:07:02 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-15 16:04:49
 */


function Queue() {
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
function enqueue(element) {
    this.listSize += 1;
    this.dataStore.push(element);
};
function dequeue() {
    this.listSize -= 1;
    return this.dataStore.shift();
};
function front() {
    return this.dataStore[0];
};
function back() {
    return this.dataStore[this.listSize - 1];
};
function toString() {
    var retStr = '';
    for (let i = 0; i < this.dataStore.length; ++i) {
        retStr += JSON.stringify(this.dataStore[i]) + ','
    }
    return retStr;
};
function empty() {
    if (this.listSize == 0) {
        return true;
    } else {
        return false;
    }
};

function Dancer(item) {
    var that = this;
    that.name = item.name;
    that.sex = item.sex;
};
function getDancers(males, females,names) {
    for (let i = 0; i < names.length; i++) {
        if(names[i].sex == 0){
            males.enqueue(new Dancer(names[i]))
        }else{
            females.enqueue(new Dancer(names[i]))
        }
    }
};
function dance(males,females){
    console.log('The dance partners are: \n');
    while (!females.empty() && !males.empty()){
        var f = females.dequeue();
        var m = males.dequeue();
        console.log('Female dancer is :'+ f.name,' and the male dancer is :' + m.name);
    };
};
var m = new Queue();
var f = new Queue();
var names = [
    { name: 'A', sex: '0' },
    { name: 'B', sex: '0' },
    { name: 'C', sex: '1' },
    { name: 'D', sex: '0' },
    { name: 'E', sex: '1' },
    { name: 'F', sex: '0' },
];
getDancers(m,f,names);
dance(m,f);
console.log('males waiting:',m.toString()||null);
console.log('females waiting:',f.toString()|| null);