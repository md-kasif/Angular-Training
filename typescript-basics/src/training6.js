var Point = /** @class */ (function () {
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.z = 0;
        this.x = x;
        this.y = y;
    }
    Point.prototype.scale = function (n) {
        this.x = this.x * n;
        this.y = this.y * n;
    };
    return Point;
}());
var pt = new Point(10);
console.log(pt.y); // logs 0
pt.x = 0;
pt.y = 7;
//pt.y = "0" // Type 'string' is not assignable to type 'number'.
