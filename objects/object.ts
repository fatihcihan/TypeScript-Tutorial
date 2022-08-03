
interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taxi X: ${point.x} Y: ${point.y}`)
    }
}

class Bus implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`bus X: ${point.x} Y: ${point.y}`)
    }
}

let taxi1: Taxi = new Taxi();
taxi1.currentLocation = { x: 2, y: 3 }
taxi1.travelTo({ x: 1, y: 2 });

let taxi2: Taxi = new Taxi();
taxi2.currentLocation = { x: 4, y: 5 }
taxi2.travelTo({ x: 2, y: 5 });

let bus1: Bus = new Bus();
bus1.currentLocation = { x: 3, y: 6 }
bus1.travelTo({ x: 3, y: 4 });