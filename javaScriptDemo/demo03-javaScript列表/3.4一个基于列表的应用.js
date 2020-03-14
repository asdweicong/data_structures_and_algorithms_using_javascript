/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-14 21:22:51 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-14 22:15:54
 */

function List(){
    var that = this;
    that.listSize = 0;//列表的元素个数
    that.pos = 0;//列表的当前位置
    that.dataStore = [];//初始化一个空数组来保存列表元素
    that.clear = clear;//清空列表中的所以元素
    that.find = find;//在列表中查找某一元素
    that.toString = toString;//返回列表的字符串形式
    that.insert = insert;//在现有元素后插入新元素
    that.append = append;//在列表的末尾添加新元素
    that.remove = remove;//从列表中删除元素
    that.front = front;//将列表的当前位置移动到第一个元素
    that.end = end;//将列表的当前位置移动到最后一个元素
    that.prev = prev;//将当前位置后移一位
    that.next = next;//将当前位置前移一位
    that.hasNext = hasNext;//判断后一位
    that.hasPrev = hasPrev;//判断前一位
    that.length = length;//列表中多少个元素
    that.currPos = currPos;//返回列表的当前位置
    that.moveTo = moveTo;//将当前位置移动到指定位置
    that.getElement = getElement;//返回列表当前元素
    that.contains = contains;//判断给定值是否在列表中
};
/**
 * append 给列表添加元素
 * @param {*}  element
 */
function append(element){
    this.dataStore[this.listSize++] = element;
};
/**
 * find 在列表中查找某一元素
 * @param {*} element 
 */
function find(element){
    for (let i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
};
/**
 * remove 从列表中删除元素
 * @param {*} element 
 */
function remove(element){
    var foundAt = this.find(element);
    if(foundAt != -1){
        this.dataStore.splice(foundAt,1)
        --this.listSize;
        return true;
    }
    return false;
};
/**
 * length 列表中有多少个元素
 */
function length(){
    return this.listSize;
};
/**
 * toString 显示列表中的元素
 */
function toString(){
    return this.dataStore;
};
/**
 * insert 向列表中插入一个元素
 * @param {*} element 
 * @param {*} after 
 */
function insert(element,after){
    var insertPos = this.find(after);
    if(insertPos != -1){
        this.dataStore.splice(insertPos+1,0,element);
        ++this.listSize;
        return true;
    }
    return false;
};
/**
 * clear 清空列表中所以的元素
 */
function clear(){
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
};
/**
 * contains 判断给定数值是否在列表中
 * @param {*} element 
 */
function contains(element){
    for (let i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
};
function front(){
    this.pos = 0;
};
function end(){
    this.pos = this.listSize -1;
};
function prev(){
    --this.pos;
};
function next(){
    if(this.pos  < this.listSize){
        ++this.pos;
    }
};
function currPos(){
    return this.pos;
};
function moveTo(position){
    this.pos = position;
};
function getElement(){
    return this.dataStore[this.pos];
};
function hasNext(){
    return this.pos < this.listSize;
};
function hasPrev(){
    return this.pos >= 0;
};


function Customer(name,movie){
    var that = this;
    that.name = name;
    that.movie = movie;
};
function displayList(list){
    // console.log('displayList():'+list.currPos(),list.length())
    for(list.front();list.currPos() < list.length(); list.next()){
        // console.log((list.getElement() instanceof Customer) + '---')
        if(list.getElement() instanceof Customer){
            console.log(list.getElement()['name'] +','+list.getElement()['movie']);
        }else{
            console.log(list.getElement());
        }
    }
}
function checkOut(name,movie,movieList,customerList){
    if(movieList.contains(movie)){
        var c = new Customer(name,movie);
        customerList.append(c);
        movieList.remove(movie);
    }else{
        console.log(movie + ' is not availble.')
    }
};
var movies = [
    'A','B','C'
];
var movieList = new List();
var customers = new List();
for (let i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
};
displayList(movieList);
checkOut('B-','B',movieList,customers);
displayList(customers);
