// Type assertions (Tur donusumleri)

let message;
message = 'hello world';        // type -> any
// message'n tipi any oldugu icin length'e ulasamiyoruz ama stringe cast edersek ulasabiliriz.
let count = (<string>message).length;
let count2 = (message as string).length     //farklı bir kullanim