function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.isOverlapped = function (circle) {
    let distance = Math.sqrt(Math.pow((circle.x - this.x), 2) + Math.pow((circle.y - this.y), 2));
    if (distance >= 2 * this.r) return 1;
    return -1;
}

module.exports = Circle;