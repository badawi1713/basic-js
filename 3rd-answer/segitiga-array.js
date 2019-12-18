// 3a. Buatlah perulangan dengan pola segitiga berikut:
for (let baris = 10; baris > 0; baris--) {
    let total = '';
    for (let kolom = 1; kolom < baris; kolom++) {
        total= total.toString().concat('*');
    }
    console.log(total);

};


// 3b. Buatlah perulangan dengan pola segitiga berikut:
var star = 5;
for(i=1 ;i<=star;i++) {

    let str = ' '.repeat(star-i);
    let str2 = '*'.repeat(i*2-1);
console.log(str + str2 + str);
};