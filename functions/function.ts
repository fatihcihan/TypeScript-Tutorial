// Functions (Fonksiyonlar)

function getAverage(a: number, b: number, c: number): string {
    const result = (a + b + c) / 3;
    return 'result : ' + result;
}

// getAverage('a', 20, 30);    // error, cunku parametre olarak number belirttik.
getAverage(1, 2, 3);

// istege bagli parametre gondermek istersek yanina soru isareti koyariz.

function getAverage2(a: number, b: number, c?: number): string {
    const result = (a + b + c) / 3;
    return 'result : ' + result;
}
getAverage2(10, 20);        // iki parametre gondermemize ragmen hata vermiyor.
getAverage2(10, 20, 30);      // burada da herhangi bir hata vermiyor.


// iki parametreli gelirse direkt ortalamsini alır, ucuncu parametre undf. olup olmadigini
// kontrol ettikten sonra sonucun ince atip sayiyi bir artirarak ortalamayi buluyoruz.

function getAverage3(a: number, b: number, c?: number): string {
    let result = a + b;
    let count = 2;
    if (typeof c !== 'undefined') {
        result += c;
        count++;
    }
    const total = result / count;
    return 'total : ' + total;
}

// parametre bilgisi belli degilse
function getAverage4(...x: number[]): string {
    let total = 0;
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        total += x[i];
        count++;
    }
    const result = total / count;
    return 'result : ' + result;
}
// artik istedigimiz kadar parametre gonderebiliriz hata vermez
getAverage4(10);
getAverage4(10, 20);
getAverage4(10, 20, 30);
getAverage4(10, 20, 30, 40);

// Arrow function

const average = (...x: number[]): string => {
    let total = 0;
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        total += x[i];
        count++;
    }
    const result = total / count;
    return 'result : ' + result;
}





