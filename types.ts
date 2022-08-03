let x;                  // default -> any
let number: number;     //  variable : type
let description: string;
let gender: boolean = true;

let numberArray: number[] = [1, 2, 3];
let numberArray2: Array<number> = [4, 5, 6];

let array: any[] = [1, 'a', true];          // type independent array
let arr: [string, number, boolean] = ['a', 2, true];    // type dependent array

// Enum usage

const paymentByCreditCard = 0;
const paymentByTransfer = 1;
const paymentByEft = 2;

enum Payment {
    CreditCard,
    Transfer,
    Eft
}

enum Payment2 {         // ilk basta da direkt atayabiliriz default olarak 0'dan baslar
    CreditCard = 1,
    Transfer = 2,
    Eft = 3
}


let credit = Payment.CreditCard;        // 0
let transfer = Payment.Transfer;        // 1
let eft = Payment.Eft;                  // 2


