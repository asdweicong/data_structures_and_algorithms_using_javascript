/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-09 21:44:30
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-09 21:51:27
 * @Description: Description
 */
function Node(data,left,right){
    var that = this;
    that.data = data;
    that.left = lfet;
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
                if(curretn == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}