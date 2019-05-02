var graph = /** @class */ (function () {
    function graph() {
    }
    graph.prototype.draw = function () {
        console.log('X' + this.x + '  Y: ' + this.y);
    };
    graph.prototype.getDistance = function (another) {
        // 
    };
    return graph;
}());
var pointx = new graph();
pointx.x = 1;
pointx.y = 2;
pointx.draw();
