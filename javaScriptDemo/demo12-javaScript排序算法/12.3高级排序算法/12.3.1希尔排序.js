/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-12 21:48:55
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-14 22:22:40
 * @Description: Description
 */
function CArray(numElements) {
    var that = this;
    that.dataStore = [];
    that.pos = 0;
    that.gaps = [5, 3, 1];
    that.numElements = numElements;
    that.insert = insert;
    that.toString = toString;
    that.clear = clear;
    that.setData = setData;
    that.swap = swap;
    that.shellsort = shellsort;
    that.shellsort1 = shellsort1;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}
function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}
function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}
function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    var restr = '';
}
function toString() {
    var restr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        restr += this.dataStore[i] + ' ';
        if (i > 0 & (i % 10 == 0)) {
            restr += '\n';
        }
    }
    return restr;
}
function swap(arr, index1, index2) {
    console.log(arr, index1, index2)
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i]
            for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}
function shellsort1() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i, N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
                swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
}
var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums);
console.log(myNums.toString());
// myNums.shellsort();
myNums.shellsort1();
console.log(myNums.toString());