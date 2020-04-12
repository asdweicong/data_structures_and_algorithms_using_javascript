/*
 * @Author: &#39;weicon&#39;
 * @Email: &#39;1418066959@qq.com&#39;
 * @Date: 2020-04-12 14:42:25
 * @Last Modified by: 'weicon'
 * @Last Modified time: 2020-04-12 15:20:59
 * @Description: Description
 */
function Graph(v){
    var that = this;
    that.vertices = v;
    that.vertexList = [];
    that.edges = 0;
    that.adj = [];
    for(var i=0;i<that.vertices;++i){
        that.adj[i] = [];
        that.adj[i].push('');
    }
    that.addEdge = addEdge;
    that.showGraph = showGraph;
    that.dfs = dfs;
    that.marked = [];
    for(var i=0;i<that.vertices;++i){
        that.marked[i] = false;
    }
    that.bfs = bfs;
    that.edgeTo = [];
    that.hasPathTo = hasPathTo;
    that.topSortHelper = topSortHelper;
    that.topSort = topSort;
}
function topSort(){
    var stack = [];
    var visited = [];
    for(var i=0;i<this.vertices;i++){
        visited[i] = false;
    }
    for(var i=0;i<stack.length;i++){
        if(stack[i] == false){
            this.topSortHelper(i,visited,stack);
        }
    }
    for(var i=0;i<stack.length;i++){
        if(stack[i] != undefined && stack[i] != false){
            console.log(this.vertexList[stack[i]]);
        }
    }
}
function topSortHelper(v,visited,stack){
    visited[v] = true;
    for(var w in this.adj[v]){
        if(!visited[w]){
            this.topSortHelper(visited[w],visited,stack)
        }
    }
    stack.push(v);
}
function addEdge(v,w){
    var that = this;
    that.adj[v].push(w);
    that.adj[w].push(v);
    that.edges++;
}
// function showGraph(){
//     for(var i=0 ;i<this.vertices;++i){
//         console.log(i + "->");
//         for(var j=0;j<this.vertices;++j){
//             if(this.adj[i][j] != undefined){
//                 console.log(this.adj[i][j]);
//             }
//         }
//     }
// }
function showGraph(){
    var visited = [];
    for(var i=0;i<this.vertices;++i){
        console.log(this.vertexList[i] + '->');
        visited.push(this.vertexList[i]);
        for(var j=0;j<this.vertices;++j){
            if(this.adj[i][j] != undefined){
                if(visited.indexOf(this.vertexList[j] < 0)){
                    console.log(this.vertexList[j]);
                }
            }
        }
        visited.pop();
    }
}
function dfs(v){
    this.marked[v] = true;
    if(this.adj[v] != undefined){
        console.log("Visited vertex: " + v);
    }
    for(var w in this.adj[v]){
        if(this.marked[w]){
            this.dfs(w);
        }
    }
}
function bfs(s){
    var queue = [];
    this.marked[s] =  true;
    queue.unshift(s);
    while (queue.length >0){
        var v = queue.shift();
        if(typeof(v) != 'string'){
            console.log('Visited vertex: ' + v);
        }
        for(var w in this.adj[v]){
            if(!this.marked[w]){
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.unshift(w);
            }
        }
    }
}
function hasPathTo(v){
    return this.marked[v];
}
function pathTo(v){
    var source = 0;
    if(!this.hasPathTo(v)){
        return undefined;
    }
    var path = [];
    for(var i=v;i!= source;i=this.edgeTo[i]){
        path.push(i)
    }
    path.push(i);
    return path;
}
g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ['CS1','CS2','Data','Assemle','Operating','Algorithms'];
g.showGraph();
g.topSort();