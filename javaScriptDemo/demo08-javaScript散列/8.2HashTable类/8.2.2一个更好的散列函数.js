/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-01 21:28:49
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-01 21:47:21
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
var someNames = ['David','Jennifer','Donnie','Raymond','Cythia','Mike'];
var hTable = new HashTabele();
for (let i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
};
hTable.showDistro();

