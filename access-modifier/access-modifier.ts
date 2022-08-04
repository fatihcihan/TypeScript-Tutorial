
interface Point {
    x: number,
    y: number
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {     // nesne olusma asamasinda location set edilir.
    // private color: string;                  // default olarak public olarak isaretlenmistir.
    // private currentLocation: Point;

    constructor(private location: Point, private color: string) { }

    // location bilgisine travelTo methoduyla dolayli bir sekilde ulasabiliyoruz
    travelTo(point: Point): void {
        console.log(`taxi X: ${this.location.x} Y: ${this.location.y}`)
    }
}

let taxi1: Taxi = new Taxi({ x: 2, y: 3 }, 'red');
taxi1.travelTo({ x: 1, y: 2 });
// taxi1. dedigimizde color ve currentLocation'a ulasamiyoruz cunku private olarak isaretledik.
