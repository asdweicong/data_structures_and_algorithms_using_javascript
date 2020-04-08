/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-01 21:28:49
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-08 21:33:24
 * @Description: Description
 */

function HashTabele(){
    var that = this;
    that.table = new Array(123);
    that.simpleHash = simpleHash;
    that.betterHash = betterHash;
    that.showDistro = showDistro;
    that.put = put;
   //  that.get = get;
};
function put(data){
    // var pos = this.simpleHash(data);
    var pos = this.betterHash(data);
    this.table[pos] = data
};
function simpleHash(data){
    var total = 0 ;
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
};
function betterHash(string){
    var h = 37;
    var total =0 ;
    for (let i = 0; i < string.length; i++) {
        total += h *total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0){
        total += this.table.length -1;
    }
    return parseInt(total);
};
function showDistro (){
    var n = 0 ;
    for (let i = 0; i < this.table.length; ++i) {
        if(this.table[i] != undefined){
            console.log(i + '：' + this.table[i]);
        }        
    }
};

 function getRandomInt(min,max){
     return Math.floor(Math.random() * (max - min +1)) + min;
 };
 function genStuData(arr){
     for(var i =0 ;i<arr.length;i++){
         var num = "";
         for(var j=0;j<9;j++){
            num += Math.floor(Math.random() * 10);
         }
         num += getRandomInt(50,100);
         arr[i] = num;
     }
 };
 var numStudents = 10;
 var arrSize = 97;
 var idLen = 9 ;
 var students = new Array(numStudents);
 console.log('Student data:',students);
 for (let i = 0; i < students.length; i++) {
     console.log(students[i])
    //  console.log(students[i].substring(0,8) + ' ' + students[i].substring(9));
 };
 console.log("Data distribution:");
 var hTable = new HashTabele();
 for (let i = 0; i < students.length; ++i) {
     hTable.put(students[i]);
 }
 hTable.showDistro();

 