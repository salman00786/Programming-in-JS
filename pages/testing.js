class Car {
    constructor(make = "Honda", model = "Civic", color = "Black", year = 2016) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }


}

class Test extends Car {
    constructor(shift = true) {
        super()
        this.shift = shift;
    }
    change() {
        this.shift = !this.shift;
        return this.shift;

    }
}

let check = new Test();
console.log(check.change());
