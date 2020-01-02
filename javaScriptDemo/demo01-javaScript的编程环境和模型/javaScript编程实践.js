/*
 * @Author: weicong 
 * @Date: 2019-12-30 16:55:39 
 * @Last Modified by: weicong
 * @Last Modified time: 2020-01-02 11:46:06
 */

 console.log("***1.2.1声明和初始化变量");
 var number;
 var name ;
 var rate = 1.2;
 var greeting = "Hello world!";
 var flag = false;
 

 console.log("***1.2.2 Javascript中的算术运算和数学库函数");
 var x = 3;
 var y = 1.2;
 var z = 9 ;

 console.log(x + y);
 console.log(x * y);
 console.log((x+y) * (x-y));
 console.log(Math.sqrt(z));//开平方
 console.log(Math.abs(y/x))//绝对值
 console.log(x.toFixed(2))//保留两位小数


 console.log("***1.2.3 判断结构");
 console.log("***1.2.4 循环结构");
 console.log("***1.2.5 函数");
 console.log("***1.2.6 变量作用域");
 console.log("***1.2.7 递归");
 var num = 0;
 function factorial (number){
     if(number == 1){
         console.log("num_01",num,number,number-1)
         return number;
     }
     num = number * factorial(number - 1);
     console.log("num_11",num,number,number+1)
     return num
 };
 console.log(factorial(5));

 console.log("迭代")
 var x = 1;
 var y ;
 for(i =2;i<=12;i++){
     y = x * 2;
     x = y
 }
 console.log(y)

 var a =3,b=45,all = 220220,before;
 var c = b/a;
 for(i =1;i<c;i++){
    before = all/2;
    all = before;
 }
 console.log(parseInt(before)+'次')

 /**
  * 任意一个数，如果是偶数除于二，如果是奇数乘与三加一 ，多次重复此操作，最终得到数据一
  */
 var i_index = 0;
 function qbsic(num){
     var thisNum;
    if(num%2 == 0){
        thisNum = num/2
    }else{
        num = num*3 + 1;
        thisNum = num
    }
    i_index++
    if(thisNum === 1){
        return thisNum
    }else{
        return qbsic(thisNum)
    }
 }
 var absicNum = qbsic(31);
 console.log('执行了'+i_index+'次最终为',absicNum)
