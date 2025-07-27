function parseCount(someFloat) {
    let someInt = Number.parseFloat(someFloat);
    if (isNaN(someInt)) {
        throw Error("Невалидное значение")
    }
    return someInt;
}

function validateCount(someParse) {
    let someCount;
    try {
        someCount = parseCount(someParse);
    } catch (Error) {
        return Error
    }
    return someCount;
}

class Triangle {

    firstSide;
    secondSide;
    thirdSide;


    constructor(firstSide, secondSide, thirdSide) {

        if (firstSide + secondSide <= thirdSide || firstSide + thirdSide <= secondSide || secondSide + thirdSide <= firstSide) {
            throw Error("Треугольник с такими сторонами не существует");
        }
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }


    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
        let halfPerimeter = this.perimeter / 2;
        return +Math.sqrt(halfPerimeter * (halfPerimeter - this.firstSide)
            * (halfPerimeter - this.secondSide)
            * (halfPerimeter - this.thirdSide)).toFixed(3);
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide)
    } catch (Error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
