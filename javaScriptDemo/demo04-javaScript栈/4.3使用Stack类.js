/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-03-15 10:49:11 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-03-15 14:04:19
 */
function Stack() {
    var that = this;
    that.dataStore = [];
    that.top = 0;
    that.push = push;//添加栈顶元素 同时变量top加一
    that.pop = pop;//返回栈顶元素 同时变量top减一
    that.peek = peek;//获取栈顶元素
    that.length = length;
    that.clear = clear;
    that.toString = toString;
};
function push(element) {
    this.dataStore[this.top++] = element;
};
function pop() {
    return this.dataStore[--this.top];
};
function peek() {
    return this.dataStore[this.top - 1];
};
function length() {
    return this.top;
};
function clear() {
    this.top = 0;
};
function toString() {
    return this.dataStore;
};
/**
 * 数制间的相互转换
 * @param {被转数} num 
 * @param {进制数} base 
 */
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num / base);
        console.log('mulBase()',num, base)
    } while (num > 0);
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
};
var num = 125, base = 8;
var newNum = mulBase(num, base)
console.log(num + 'converted to base ' + base + ' is ' + newNum);

/**
 * 回文
 * @param {*} word 
 */
function isPalindrome(word){
    var s = new Stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = '';
    while(s.length() > 0){
        rword += s.pop();
    };
    if(word == rword){
        return true;
    }else{
        return false;
    }
}
var word = 'weew';
console.log(isPalindrome(word));

/**
 * 递归演示
 */
function factorial(n){
    if(n === 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};
/**
 * 使用栈模拟递归过程
 */
function fact(n){
    var s = new Stack();
    while (n>1){
        s.push(n--);
    };
    var product = 1;
    while (s.length() > 0){
        product *= s.pop();
    }
    return product;
}
var num = 5
console.log(factorial(num))
console.log(fact (num))