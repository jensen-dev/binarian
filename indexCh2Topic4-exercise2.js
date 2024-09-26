// 2.encapsulation.js
//   - Tambahkan properti password pada class Laptop
//   - tambahkan method encrypt(private) dan decrypt(privete) seperti contoh nomor 5
//   - tambahkan method updatePassword(password, ) yang mengakses method encrypt dan decrypt

class Laptop {
    constructor(brand, type, password) {
        this.brand = brand;
        this.type = type;
        this.password = password;
    }
    info() {
        console.log(`${this.brand} ${this.type}`);
    }
    run() {
        console.log(`${this.brand} ${this.type} is on!`);
    }
    #encrypt = (password) => {
        return `encrypted-verion-of-${password}`;
    }
    #decrypt = () => {
        return this.password.split(`encrypted-verion-of-`)[1];
    }
    updatePassword(password) {
        this.password = this.#encrypt(password);
        this.password = this.#decrypt();
    }
}
let laptop = new Laptop("HP", "type1", "1234");
laptop.info();
laptop.run();
console.log();
console.log(`Before ${laptop.password}`);
laptop.updatePassword("90876");
console.log(`After ${laptop.password}`);

// console.log(laptop.encrypt("2233"));