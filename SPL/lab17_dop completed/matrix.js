"use strict"

export class SquareMatrix {
    constructor(size, arrayOfValues) {
        this.size = size
        this.values = arrayOfValues;
        
        this.i = 0;
        this.j = 0;

        this.k = 0;
    }

    set row(value) {
        if (this.i + value < this.size) {
            this.i = value
        }
        else {
            this.i = value % (this.size);
        };
    }

    get row() {
        return this.i;
    }

    set column(value) {
        if (this.j + value < this.size) {
            this.j = value
        }
        else {
            this.j = value % (this.size);
            this.row = this.row + ( Math.floor(value / (this.size)) )
        };
    }

    get column() {
        return this.j
    }

    nextValue(value = 1) {
        this.column = this.column + value;
    }

    next() {
        let info = {value: this.getValueMatrix(this.k, this.k), done: (this.k == this.size - 1)}
        this.k += ((this.k == this.size - 1) ? 0 : 1);
        return info
    }

    getValueMatrix(row = this.row, column = this.column) {
        return this.values[row * 3 + column]
    }

    getDiagonalValues() {
        let values = [];

        for (let i = 0; i < this.size; i++) {
            values.push(this.getValueMatrix(i, i));
        }
        
        return values;
    }
}