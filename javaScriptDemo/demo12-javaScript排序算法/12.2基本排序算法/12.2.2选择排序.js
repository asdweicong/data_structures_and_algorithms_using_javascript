/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-12 21:48:55
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-12 22:16:42
 * @Description: Description
 */
function CArray(numElements){
    var that = this;
    that.dataStore = [];
    that.pos = 0;
    that.numElements = numElements;
    that.insert = insert;
    that.toString = toString;
    that.clear = clear;
    that.setData = setData;
    that.swap = swap;
    that.bubbleSort = bubbleSort;
    for(var i=0;i<numElements;++i){
        this.dataStore[i] = i;
    }
}
function setData(){
    for(var i=0;i<this.numElements;i++){
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}
function clear(){
    for(var i=0;i<this.dataStore.length;++i){
        this.dataStore[i] = 0;
    }
}
function insert(element){
    this.dataStore[this.pos++] = element;
}
function toString(){
    var restr = '';
}
function toString(){
    var restr = "";
    for(var i=0;i<this.dataStore.length;++i){
        restr += this.dataStore[i] + ' ';
        if(i >0 & (i%10 == 0)){
            restr += '\n';
        }
    }
    return restr;
}
function swap(arr,index1,index2){
    console.log(arr,index1,index2)
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function bubbleSort(){
    var temp,min;
    for(var outer = 0;outer<=this.dataStore.length-2;++outer){
        min = outer;
        for(var inner = outer +1;inner<=this.dataStore.length-1;++inner){
            if(this.dataStore[inner] < this.dataStore[min]){
                min = inner;
            }
            swap(this.dataStore,outer,min);
        }
    }
}
var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums);
console.log(myNums.toString());
myNums.bubbleSort();
console.log(myNums.toString());