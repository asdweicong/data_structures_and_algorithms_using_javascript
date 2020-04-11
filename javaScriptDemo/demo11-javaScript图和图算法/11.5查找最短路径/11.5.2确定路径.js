/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-11 21:19:23
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-11 22:05:59
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
    that.hashPathTo = hashPathTo;
    that.pathTo = pathTo;
    that.bfs = bfs;
    that.edgeTo = [];
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
function bfs(s){
    var queue = [];
    this.marked[s] = true;
    queue.push(s);//添加到队尾
    while (queue.length > 0){
        var v = queue.shift();//从队首移除
        if(v == undefined){
            console.log('Visisted vertex: ' + v);
        }
        for(var w in this.adj[v]){
            if(!this.marked[w]){
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}
function pathTo(v){
    var source = 0;
    if(!this.hashPathTo(v)){
        return undefined;
    }
    var path = [];
    for(var i=v;i!= source;i=this.edgeTo[i]){
        path.push(i);
    }
    path.push(source);
    return path;
}
function hashPathTo(v){
    return this.marked[v];
}
var g = new Graph(5);
g.bfs(0);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
var vertex = 0;
var paths = g.pathTo(vertex);
console.log(paths,g.marked)
while (paths.length >0){
    if(paths.length>1){
        console.log(paths.pop() + '_');
    }else{
        console.log(paths.pop());
    }
}