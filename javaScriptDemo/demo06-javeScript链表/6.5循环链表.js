/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-16 20:27:31 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-16 21:32:25
 */
/**
 * Node类
 * @param {*} element 
 */
function Node(element){
    var that = this;
    that.element = element;
    that.next = null;
    that.previous = null;
};
/**
 * LinkedList类
 */
function LList(){
    var that = this;
    that.head = new Node("head");
    that.head.next = that.head;
    that.find = find;
    that.insert = insert;
    that.remove = remove;
    that.findPrevious = findPrevious;
    that.display = display;
    that.dispReverse = dispReverse;
    that.findLast = findLast;
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
    newNode.previous = current;
    current.next = newNode;
};
function display(){
    var currNode = this.head;
    while (!(currNode.next == null) && !(currNode.next.element == "head")){
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
    var currNode = this.find(item);
    if(!(currNode.next == null)){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
};
function findLast(){
    var currNode = this.head;
    while (!(currNode.next == null) && !(currNode.next.element == 'head')){
        currNode = currNode.next;
    }
    return currNode;
};
function dispReverse(){
    var currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.previous == null)){
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}
var cities = new LList();
cities.insert("A","head");
cities.insert("B","A");
cities.insert("C","A");
cities.insert("D","B");
cities.display();
cities.remove("C");
cities.display();
cities.dispReverse();