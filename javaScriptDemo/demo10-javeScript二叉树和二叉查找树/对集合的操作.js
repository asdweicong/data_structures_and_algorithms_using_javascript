/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-08 21:45:04
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-08 22:10:31
 * @Description: Description
 */

function Set() {
    var that = this;
    that.dataStore = [];
    that.add = add;
    that.remove = remove;
    that.size = size;
    that.union = union;
    that.intersect = intersect;
    that.subset = subset;
    that.contains = contains;
    that.difference = difference;
    that.show = show;
}
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}
function size() {
    return this.dataStore.length;
}
function show() {
    return this.dataStore;
}
function intersect(set) {
    var tempSet = new Set();
    for (let index = 0; index < this.dataStore.length; ++index) {
        if (set.contains(this.dataStore[index])) {
            tempSet.add(this.dataStore[index]);
        }
    }
    return tempSet;
}
function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }
}
function difference(set){
    var tempSet = new Set();
    for (let index = 0; index < this.dataStore.length; ++index) {
        if(!set.contains(this.dataStore[index])){
            tempSet.add(this.dataStore[index]);
        }        
    }
    return tempSet;
}
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}
function union(set) {
    var tempSet = new Set();
    for (let index = 0; index < this.dataStore.length; ++index) {
        tempSet.add(this.dataStore[index]);
    }
    for (let index = 0; index < set.dataStore.length; ++index) {
        if (!tempSet.contains(set.dataStore[index])) {
            tempSet.dataStore.push(set.dataStore[index])
        }
    }
    return tempSet;
}
var cis = new Set()
cis.add('Mike');
cis.add('Clayton');
cis.add('Raymond');
cis.add('Raymond');
var cis_ = new Set()
cis_.add('Mike_');
cis_.add('Clayton_');
cis_.add('Raymond_');
cis_.add('Raymond_');
var it = new Set();
it = cis.union(cis_);
console.log(it.show());