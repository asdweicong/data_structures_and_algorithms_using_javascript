/*
 * @Author: weicong 
 * @Date: 2020-01-02 16:42:16 
 * @Last Modified by: weicong
 * @Last Modified time: 2020-01-02 17:30:42
 */
console.log('***2.5.1  不生成新数组的迭代器方法');
/**
 * forEach()
 * every()
 * some()
 * reduce()从左到右
 * reduceRight()从右到左
 */
function square(num){
    console.log(num,num * num);
};
var nums = [1,2,3,4,5,6,7,8,9];
nums.forEach(square);

function isEven(num){
    return num % 2 == 0;
};
var nums = [2,4,6,1,8];
var even = nums.every(isEven);
var someEven = nums.some(isEven);
console.log(even,someEven)
function add(runningTotal,currentValue){
    return runningTotal + currentValue;
};
var sum = nums.reduce(add);
console.log(sum);

console.log('***2.5.2  生成新数组的迭代器方法');
/**
 * map()
 * filter()
 */
function curve(drade){
    return drade += 5;
};
var drades = [4,5,7,2,6,0];
var newDrade = drades.map(curve);
console.log(newDrade);

function first(word){
    return word[0];
}
var words = ['for','your','information'];
var acronym = words.map(first);
console.log(acronym.join(''));

function isEven(num){
    return num % 2 == 0;
};
var evens = drades.filter(isEven);
console.log(evens)