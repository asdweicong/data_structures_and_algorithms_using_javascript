/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-19 21:37:16 
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-03-19 22:12:04
 */

function Dictionary(){
    var that = this;
    that.add = add;
    that.datastore = new Array();
    that.find = find;
    that.remove = remove;
    that.showAll = showAll;
    that.count = count;
    that.clear = clear;
};
function add (key,value){
   this.datastore[key] = value;
};
function find(key){
    return this.datastore[key];
};
function remove(key){
    delete this.datastore[key];
};
function showAll(){
    var datakeys = Array.prototype.slice.call(Object.keys(this.datastore));
    for(var key in datakeys){
       console.log(this.datastore[key] + '->' + this.datastore[datakeys[key]]);
    }
};

function count(){
    var n = 0 ;
    for (var key in Object.keys(this.datastore)){
        ++n;
    }
    return n;
};
function clear(){
    Object.keys(this.datastore).forEach(function(key){
        delete this.datastore[key]
    },this)
};
var pbook = new Dictionary();
pbook.add('A',1);
pbook.add('B',2);
pbook.add('C',3);
console.log(pbook.count());
console.log(pbook.find('C'));
pbook.showAll();
pbook.clear();
pbook.count();

