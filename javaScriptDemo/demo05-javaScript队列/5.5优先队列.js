/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-15 18:03:57 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-15 18:23:59
 */

function Queue() {
    var that = this;
    that.dataStore = [];
    that.listSize = 0;
    that.enqueue = enqueue;//队尾添加元素
    that.dequeue = dequeue;//删除优先元素
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
    var entry = 0;
    for (let i = 0; i < this.listSize; i++) {
        if (this.dataStore[i].code < this.dataStore[entry].code) {
            entry = i
        }
    }
    this.listSize -= 1;
    return this.dataStore.splice(entry, 1);
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
        retStr += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';
    }
    console.log(retStr + '\n');
    return retStr;
};
function empty() {
    if (this.listSize == 0) {
        return true;
    } else {
        return false;
    }
};
function Patient(name, code) {
    this.name = name;
    this.code = code;
};
var names = [
    { name: 'A', code: 5 },
    { name: 'B', code: 6 },
    { name: 'C', code: 2 },
    { name: 'D', code: 4 },
    { name: 'E', code: 1 },
];
var ed = new Queue();
for (let i = 0; i < names.length; i++) {
    var p = new Patient(names[i].name, names[i].code);
    ed.enqueue(p);
}
ed.toString();
while (!ed.empty()){
    var seen = ed.dequeue();
    console.log(JSON.stringify(seen))   
}
