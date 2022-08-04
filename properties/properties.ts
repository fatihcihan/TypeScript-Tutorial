
interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

export class Taxi implements Vehicle {
    constructor(private _location: Point, private _color: string) { }

    // location bilgisine travelTo methoduyla dolayli bir sekilde ulasabiliyoruz
    travelTo(point: Point): void {
        console.log(`taxi X: ${this._location.x} Y: ${this._location.y}`)
    }

    get Location() {
        return this._location;
    }

    set Location(value: Point) {
        if (value.x < 0 || value.y < 0) {
            throw new Error('coordinate information cannot be negative')
        }
        this._location = value;
    }
}

let taxi1: Taxi = new Taxi({ x: 2, y: 3 }, 'red');
taxi1.travelTo({ x: 1, y: 2 });


// yukaridaki methodlar sayesinde kontrollu bir sekilde get ve set islemlerini yapabiliyoruz

let currentLocation = taxi1.Location
taxi1.Location = { x: 2, y: 5 };

