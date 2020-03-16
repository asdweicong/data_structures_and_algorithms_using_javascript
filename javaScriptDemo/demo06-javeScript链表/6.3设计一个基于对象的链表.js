/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-16 20:27:31 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-16 21:13:01
 */
/**
 * Node类
 * @param {*} element 
 */
 function Node(element){
     var that = this;
     that.element = element;
     that.next = null;
 };
 /**
  * LinkedList类
  */
 function LList(){
     var that = this;
     that.head = new Node("head");
     that.find = find;
     that.insert = insert;
     that.remove = remove;
     that.findPrevious = findPrevious;
     that.display = display;
 };
 function find(item){
     var currNode = this.head;
     while (currNode.element != item){
         currNode = currNode.next;
     }
     return currNode;
 };
 function insert(newElement,item){
     var newNode = new Node(newElement);
     var current = this.find(item);
     newNode.next = current.next;
     current.next = newNode;
 };
 function display(){
     var currNode = this.head;
     while (!(currNode.next == null)){
         console.log(currNode.next.element);
         currNode = currNode.next;
     }
 };

 function findPrevious(item){
     var currNode = this.head;
     while (!(currNode.next == null) && (currNode.next.element != item)){
         currNode = currNode.next;
     }
     return currNode;
 };
 function remove(item){
     var prevNode = this.findPrevious(item);
     if(!(prevNode.next == null)){
         prevNode.next = prevNode.next.next;
     }
 };
 
 var cities = new LList();
 cities.insert("A","head");
 cities.insert("B","A");
 cities.insert("C","A");
 cities.insert("D","B");
 cities.display();
 cities.remove("C");
 cities.display();