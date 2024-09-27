//
function totalVokal(kata) {
    let jumlahVokal = 0;

    for (let i=0; i<kata.length; i++) {
        if (kata[i].toLowerCase() == 'a'
        || kata[i].toLowerCase() == 'i'
        || kata[i].toLowerCase() == 'u'
        || kata[i].toLowerCase() == 'e'
        || kata[i].toLowerCase() == 'o') {
            jumlahVokal++; // jumlahVokal = jumlahVokal + 1;
        }
    }

    return jumlahVokal;
}

console.log(`"harI ini tdk hUjan dan cerAH" = ${totalVokal("harI ini tdk hUjan dan cerAH")}`);

// palindrome
let isPalindrome = function(kata) {
    for (let i=0; i<kata.length/2; i++) {
        if (kata[i] != kata[kata.length-1-i]) {
            return false;
        }
    }

    return true;
}

console.log(`madam ${isPalindrome("madam")}`);
console.log(`katal ${isPalindrome("katal")}`);
console.log(`katak ${isPalindrome("katak")}`);

// class
class Hewan {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }
    // constructor(nama) {
    //     this.nama = nama;
    // }

    bersuara(suara) {
        console.log(`${this.nama} ${suara}`);
    }
}

let ayam = new Hewan("ayam", "unggas");
ayam.bersuara("berkokok");
let harimau = new Hewan("harimau", "mamalia");
harimau.bersuara("mengaum");
let kuda = new Hewan("kuda", "mamalia");
kuda.bersuara("...");