/*
 * @Author: weicong 
 * @Date: 2020-01-02 14:31:50 
 * @Last Modified by: weicong
 * @Last Modified time: 2020-01-02 17:28:16
 */

 console.log('***2.3.1 查找元素');
 var arr = ['a','b','c','a','b'];
 console.log(arr.indexOf('c'))
 console.log(arr.indexOf('a'))
 console.log(arr.lastIndexOf('a'))

 console.log('***2.3.2 数组的字符串表示');
console.log(arr);
console.log(arr.join());
console.log(arr.toString());

console.log('***2.3.3 由已有数组创建新数组');
var arr02 = ['d','f'];
var arr03 = arr.concat(arr02)
var arr04 = arr02.concat(arr)
console.log(arr03)
console.log(arr04)
var arr05 = arr04.splice(3,4);//截取/或者增加、移出元素  -->第一参数为起始索引，第二参数为截取的长度
console.log(arr04,arr05)


