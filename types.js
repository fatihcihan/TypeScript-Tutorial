var x; // default -> any
var number; //  variable : type
var description;
var gender = true;
var numberArray = [1, 2, 3];
var numberArray2 = [4, 5, 6];
var array = [1, 'a', true]; // type independent array
var arr = ['a', 2, true]; // type dependent array
// Enum usage
var paymentByCreditCard = 0;
var paymentByTransfer = 1;
var paymentByEft = 2;
var Payment;
(function (Payment) {
    Payment[Payment["CreditCard"] = 0] = "CreditCard";
    Payment[Payment["Transfer"] = 1] = "Transfer";
    Payment[Payment["Eft"] = 2] = "Eft";
})(Payment || (Payment = {}));
var Payment2;
(function (Payment2) {
    Payment2[Payment2["CreditCard"] = 1] = "CreditCard";
    Payment2[Payment2["Transfer"] = 2] = "Transfer";
    Payment2[Payment2["Eft"] = 3] = "Eft";
})(Payment2 || (Payment2 = {}));
var credit = Payment.CreditCard; // 0
var transfer = Payment.Transfer; // 1
var eft = Payment.Eft; // 2
