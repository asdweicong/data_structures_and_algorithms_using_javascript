/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-09 21:44:30
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-09 22:24:12
 * @Description: Description
 */
function Node(data,left,right){
    var that = this;
    that.data = data;
    that.left = left;
    that.right = right;
    that.show = show;
}
function show (){
    return this.data;
}
function BST(){
    var that = this;
    that.root = null;
    that.insert = insert;
    that.inOrder = inOrder;
    that.getMin = getMin;
    that.getMax = getMax;
}
function insert(data){
    var n = new Node(data,null,null);
    if(this.root == null){
        this.root = n;
    }else{
        var current = this.root;
        var parent;
        while (true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}
/**
 * 中序遍历
 * @param {*} node 
 */
function inOrder(node){
    if(!(node == null)){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}
/**
 * 先序遍历
 * @param {*} node 
 */
function preOrder(node){
    if(!(node == null)){
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}
function postOrder(node){
    if(!(node == null)){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show())
    }
}
function getMin(){
    var current = this.root;
    while(!(current.left == null)){
        current = current.left;
    }
    return current.data;
}
function getMax(){
    var current = this.root;
    while(!(current.right == null)){
        current = current.right;
    }
    return current.data;
}

var nums = new BST();
nums.insert(23);
nums.insert(450);
nums.insert(1);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMin();
var max = nums.getMax();
console.log('nums:',nums)
console.log('min:',min);
console.log('max:',max);