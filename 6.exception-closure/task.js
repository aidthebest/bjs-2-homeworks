function parseCount (count) {
    let res = Number.parseInt(count);
    if (Number.isNaN(res)) {
        throw new Error("Невалидное значение");
    };
    return res;
}

function validateCount(count) {
    try {
        const a = parseCount(count)
        return a;
    }catch(err) {
        return err; 
    } 
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c ) < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
          }
        }

    getPerimeter()  {
        let per = this.a + this.b + this.c;
        return per
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let s = parseFloat(Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3));
        return s;
    }  
}

function getTriangle(a, b, c) {
    try {
        let newTriangle = new Triangle(a, b, c);
        return newTriangle;
    }catch (err) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует", 
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}