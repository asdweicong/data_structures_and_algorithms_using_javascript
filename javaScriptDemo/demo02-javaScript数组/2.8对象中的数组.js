/*
 * @Author: weicong 
 * @Date: 2020-01-02 17:22:20 
 * @Last Modified by: weicong
 * @Last Modified time: 2020-01-02 17:33:28
 */
 function weekTemps(){
     this.dataStore = [];
     this.add = add;
     this.average = average;
 };
 function add(temp){
     this.dataStore.push(temp);
 };
 function average(){
     var total = 0;
     for (let i = 0; i < this.dataStore.length; ++i) {
         const element = this.dataStore[i];
         total += element;
     }
     return total/this.dataStore.length;
 };
 var thisWeek = new weekTemps();
 var arrs = [22,4,3,4,3,464,54,54];
 for (let index = 0; index < arrs.length; index++) {
     const element = arrs[index];
     thisWeek.add(element)
 }
 console.log(thisWeek.average())