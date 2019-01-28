module.exports = class Coord
{
    constructor(x, y=null) {
        this.colors = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        if (typeof x == 'string') {
            this.hx = x.slice(0, 1).toUpperCase();
            this.hy = x.slice(1);
            this.x = this.colors.indexOf(this.hx);
            this.y = 8 - this.hy;
        } else {
            this.x = x;
            this.y = y;
            this.hx = this.colors[this.x];
            this.hy = 8 - this.y;
        }
        this.hs = this.hx + this.hy;
    }

    isValid() {
        return this.x >= 0 && this.x <= 7 &&
                this.y >= 0 && this.y <= 7 &&
                this.colors.includes(this.hx) &&
                this.hy >= 1 && this.hy <= 8
    }

    toObject() {
        return JSON.stringify(this);
    }
}