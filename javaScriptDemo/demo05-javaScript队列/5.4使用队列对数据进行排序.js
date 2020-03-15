/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-15 17:12:13 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-15 18:00:55
 */
var ten = 10;
var one = 1;
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
function distribute(nums, queues, n, digit) {
    // console.log('distribute()',nums, queues, n, digit)
    for (let i = 0; i < n; i++) {
        if (digit == 1) {
            queues[nums[i] % n].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / n)].enqueue(nums[i]);
        }
    }
};
function collect(queues, nums,ten) {
    // console.log('collect()',queues, nums,ten)
    var j = 0;
    for (let i = 0; i < ten; ++i) {
        while (!queues[i].empty()) {
            nums[j++] = queues[i].dequeue();
        }
    }
};
function dispArray(arr) {
    var string = ''
    for (let i = 0; i < arr.length; i++) {
        string += arr[i] + ' ';
    }
    console.log(string)
}

var queues = [];
for (let i = 0; i < ten; i++) {
    queues[i] = new Queue();
};
var nums = [];
for (let i = 0; i < ten; i++) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
};
console.log('Before radix sort: ');
dispArray(nums);
console.log(queues);
distribute(nums, queues, ten, one);
collect(queues, nums,ten);
distribute(nums, queues, ten, ten);
collect(queues, nums,ten);
console.log('After radix sort: ');
dispArray(nums);
console.log(queues);
