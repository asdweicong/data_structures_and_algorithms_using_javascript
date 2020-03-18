/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-18 22:10:52 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-18 22:21:02
 */

 function Dictionary(){
     var that = this;
     that.add = add;
     that.datastore = new Array();
     that.find = find;
     that.remove = remove;
     that.showAll = showAll;
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
     var datakeys = Array.prototype.slice.call(object.keys(this.datastore));
     for(var key in datakeys){
        console.log(this.datastore[key] + '->' + this.datastore[datakeys[key]]);
     }
 };
 var pbook = new Dictionary();
 pbook.add('A',1);
 pbook.add('B',2);
 pbook.add('C',3);
 console.log(pbook.find('B'));
 pbook.remove('A');
 pbook.showAll();