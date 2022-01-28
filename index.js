// Your code here

class Polygon {
    constructor(arrayOfIntegers) {
        this.arrayOfIntegers = arrayOfIntegers
    }

    get countSides() {
        return this.arrayOfIntegers.length
    }

    get perimeter() {
        const totalSides = this.arrayOfIntegers.reduce((acc, i) => {
            return i + acc;
        }, 0);
        return totalSides;
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.arrayOfIntegers[0];
        let side2 = this.arrayOfIntegers[1];
        let side3 = this.arrayOfIntegers[2];
        if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
            return true;
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let side1 = this.arrayOfIntegers[0];
        let side2 = this.arrayOfIntegers[1];
        let side3 = this.arrayOfIntegers[2];
        let side4 = this.arrayOfIntegers[3];
        if (side1 === side2 && side2 === side3 && side3 === side4) {
            return true 
        } else {
            return false
        }
    }

    get area() {
        if (this.isValid === true) {
            let side1 = this.arrayOfIntegers[0];
            let side2 = this.arrayOfIntegers[1];
            return side1 * side2;
        } else {
            return "This is not a valid square"
        }
    }
}