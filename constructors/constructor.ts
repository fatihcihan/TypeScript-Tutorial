
interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {     // nesne olusma asamasinda location set edilir.
    color: string;
    constructor(location: Point, color: string) {
        this.currentLocation = location;
        this.color = color;
    }
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taxi X: ${point.x} Y: ${point.y}`)
    }
}

let taxi1: Taxi = new Taxi({ x: 2, y: 3 }, 'red');
taxi1.travelTo({ x: 1, y: 2 });
console.log(taxi1.currentLocation);   // herhangi bi hata vermez cunku yukarida instance alirken set ettik
// taxi1.color = 'red';     bunun yerine constructor'da ikinci parametre olarak da yollayabiliriz
