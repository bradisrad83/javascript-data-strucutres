class Graph {
    constructor() {
        this.adjecencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjecencyList[vertex]) this.adjecencyList[vertex] = [];
    }
    addEdge(vertexOne, vertexTwo) {
        this.adjecencyList[vertexOne].push(vertexTwo);
        this.adjecencyList[vertexTwo].push(vertexOne);
    }
    removeEdge(vertexOne, vertexTwo) {
        this.adjecencyList[vertexOne] = this.adjecencyList[vertexOne].filter(vertex => {
            return vertex !== vertexTwo;
        });
        this.adjecencyList[vertexTwo] = this.adjecencyList[ververtexTwotexOne].filter(vertex => {
            return vertex !== vertexOne;
        });
    }
    removeVertex(vertex) {
        while(this.addVertex[vertex].length) {
            const adjacentVertex = this.adjecencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjecencyList[vertex];
    }
    recursiveDFS(start) {
        let values = [];
        let visited = {};
        // we must add this below becuase otherwise calling this.adjecencyList[vertex] inside the internal function would return undefined because of scope
        const adjecencyList = this.adjecencyList;
        function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            results.push(vertex);
            adjecencyList[vertex].forEach(neighbor => {
                if(!vistited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        }
        dfs(start);
        return values;
    }
    iterativeDFS(start) {
        let visited = {};
        let values = [];
        let stack = [start];
        visited[start] = true;
        let currentVertex;
        while(stack.length) {
            currentVertex = stack.pop;
            values.push(currentVertex);
            this.adjecencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return values;
    }

    iterativeBFS(start) {
        let values = [];
        let visited = {};
        let queue = [start];
        visited[start] = true;
        let currentVertex;
        while(queue.length) {
            currentVertex = queue.shift();
            values.push(currentVertex);
            this.adjecencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return values;
    }
}