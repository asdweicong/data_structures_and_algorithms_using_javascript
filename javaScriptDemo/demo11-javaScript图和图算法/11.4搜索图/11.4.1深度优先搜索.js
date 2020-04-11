/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-11 21:19:23
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-11 21:37:06
 * @Description: Description
 */
function Graph(v){
    var that = this;
    that.vertices = v;
    that.edges = 0;
    that.adj = [];
    for(var i =0 ;i<that.vertices;++i){
        that.adj[i] = [];
        that.adj[i].push('');
    }
    that.addEdge = addEdge;
    that.showGraph = showGraph;
    that.dfs = dfs;
    that.marked = [];
    for(var i =0;i<that.vertices;++i){
        that.marked[i] = false;
    }
}
function addEdge(v,w){
    var that = this;
    that.adj[v].push(w);
    that.adj[w].push(v);
    that.edges++;
}
function showGraph(){
    for(var i =0;i<this.vertices;++i){
        console.log(i + '->');
        for(var j = 0;j<this.vertices;j++){
            if(this.adj[i][j] != undefined){
                console.log(this.adj[i][j] + ' ');
            }
        }
    }
}
function dfs(v){
    this.marked[v] = true;
    if(this.adj[v] != undefined){
        console.log('Visited vertex: ' + v);
    }
    for (var w in this.adj[v]){
        if(!this.marked[w]){
            this.dfs(w);
        }
    }
}
var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);