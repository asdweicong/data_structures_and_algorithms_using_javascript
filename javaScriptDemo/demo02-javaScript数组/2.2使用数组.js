/*
 * @Author: weicong 
 * @Date: 2020-01-02 14:15:19 
 * @Last Modified by: weicong
 * @Last Modified time: 2020-01-02 14:30:54
 */

 console.log('***2.2.1 创建数组')
var array = [];
var numbers = 3;
var arr = [1,54,544];
console.log(Array.isArray(numbers));//false
console.log(Array.isArray(arr));//true

console.log('***2.2.2 读写数组');
var nums = [];
for(var i =0 ;i<3;i++){
    nums[i] = i + 1;// 同nums.push(i+1)
}
console.log(nums)

console.log('***2.2.3由字符串生成数组');
var sentence = 'ths quick brown fox jumped over the lazy dog';
var words = sentence.split(' ');
for (let i = 0; i < words.length; i++) {
    const element = words[i];
    console.log("word" + i + ":" + element)
}

console.log('***2.2.4 对数组的整体性操作');
/**
 * 浅复制与深复制
 */
var samenums = nums;//浅复制
console.log("samenums-befor",samenums)
nums[0] = 400;
console.log("samenums-after",samenums)
var samenums = [];//浅复制
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    samenums.push(element)
}
nums[0] = 500;
console.log('samenums-',samenums);

