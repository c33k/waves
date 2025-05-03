export class Point {
    constructor (index, x, y, max) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.fixedY = y;
        this.speed = 0.01;
        this.cur = index; // an index that identities the unique movement of this point
        this.max = max; // max amplitude for this point
    }

    update () {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}