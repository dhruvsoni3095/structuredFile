var graph = /** @class */ (function () {
    /*traditional way
    private x: number;
    private y: number;
    constructor(x?: number, y?: number){
        this.x=x;
        this.y=y;
        
    }*/
    // another way
    //note- constructor should have a body {}
    function graph(x, y) {
        this.x = x;
        this.y = y;
        // the ts compiler wll initialize the field 
        //with the same name with the value of this argument
    }
    // by making function get and set
    graph.prototype.getX = function () {
        return this.x;
    };
    graph.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('value can\'t be less than 0');
        }
        this.x = value;
    };
    Object.defineProperty(graph.prototype, "X", {
        //by making properties
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value can\'t be less than 0');
            }
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    graph.prototype.draw = function () {
        console.log('x:' + this.x + '  y:' + this.y);
    };
    return graph;
}());
var point = new graph(2, 3);
point.draw();
var c = point.getX();
console.log(c);
point.setX(15);
var x = point.X;
point.X = 16;
point.draw();
//problem: we can't access the x value from outside and access it
// solution make a getX function in class and setX function to change the value 
//this is called as PROPERTIES
