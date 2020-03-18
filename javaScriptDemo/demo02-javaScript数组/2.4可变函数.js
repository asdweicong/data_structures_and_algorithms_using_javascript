/*
 * @Author: weicong 
 * @Date: 2020-01-02 14:44:16 
 * @Last Modified by: weicong.ling
 * @Last Modified time: 2020-03-18 09:40:26
 */

console.log('***2.4.1 为数组添加元素');
/**
 * push()和unshift()
 */
var arr = [1, 2, 3, 4];
arr.push(5);//数组末尾添加一个元素5
console.log(arr)
var newNum = 0;
var length = arr.length
for (let i = length; i >= 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = newNum;
console.log(arr);

var newNum = -1;
arr.unshift(newNum);
console.log(arr);
arr.unshift(-3, -2);
console.log(arr);

console.log('***2.4.2 从数组中删除元素');
/**
 * pop()删除数组末尾的元素
 * shift()删除数组第一个元素
 */
var nums = [1, 2, 3, 4];
var a = nums.pop();
console.log(nums, a);
var b = nums.shift();
console.log(nums, b);

console.log('***2.4.3 从数组中间位置添加和删除元素');
var nums = [1, 2, 3, 7, 8, 9];
var newNums = [4, 5, 6];
nums.splice(3, 0, newNums);//第一参数为起始索引，第二参数为截取的长度，第三个参数为插入元素
console.log(nums)
nums.splice(3, 1, 4, 5, 6);//第一参数为起始索引，第二参数为截取的长度，第三个参数之后为插入元素
console.log(nums);

console.log('***2.4.4 为数组排序');
/**
 * reverse()倒序
 * sort()正序  -->针对字符串类型非常好使 对纯数字不太让人满意(只对元素的第一个字符串排序，即按照字典排序) 可传入大小比较函数得到对应的排序
 */
function compare(num1, num2) {
    console.log('compare()', num1, num2)
    return num1 - num2;
}
var arrs = [1, 2, 300, 400, 5];
arrs.reverse();
console.log(arrs);
arrs.sort();
console.log(arrs);
var names = ['报废单', '打火机', '啊啊啊', '拆', '单', '姜'];
names.sort(compare);
console.log(names);
arrs.sort(compare);
console.log(arrs)




