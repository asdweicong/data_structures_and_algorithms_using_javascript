/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-09 21:44:30
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-10 22:11:49
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
    that.update = update;
    that.find = find;
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

function find(data){
    var current = this.root;
    console.log(0,data,current)
    while (current != null){
        if(current.data == data){
            console.log(1,current);
            return current;
        }else if(data < current.data){
            console.log(2,current);
            current = current.left;
        }else{
            console.log(3,current);
            current = current.right;
        }
    }
    return null;
}
function update(data){
    var grade= this.find(data);
    grade.count ++;
    return grade;
}
function prArray(arr){
    console.log(arr[0].toString());
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i].toString());
        if(i % 10 == 0){
            console.log('\n');
        }
    }
}
function genArray(length){
    var arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}
var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (let i = 0; i < grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if(grade == null){
        gradedistro.insert(g);
    }else{
        gradedistro.update(g);
    }
}
var cont = 'y';
while(cont == 'y'){
    var g = parseInt(readline());
    var aGrade = gradedistro.find(g);
    if(aGrade == null){
        console.log("No occurrences of" + g);
    }else{
        console.log("Occurences of " + g +": " + aGrade.count);
    }
    console.log("Look at another grade (y/n)");
    cont = readline();
}