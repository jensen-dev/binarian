/*1.inheritance.js
  Buatlah Class Laptop dengan detail :

  properti
  - brand
  - type

  method
  - info() mengembalikan detail brand dan type.
  - run() mengembalikan "{Brand} {type} is on!"

  Buatlah Class LaptopGaming(extend dari Laptop) dengan detail :

  method
  - info() mengembalikan detail brand dan type dan "\nAble to play games!"
  - gaming() mengembalikan method run() dari class Laptop dan "\nRunning PUBG and Valorant!"!
*/
class Laptop {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
    info() {
        console.log(`${this.brand} ${this.type}`);
    }
    run() {
        console.log(`${this.brand} ${this.type} is on!`);
    }
}
class LaptopGaming extends Laptop {
    constructor(brand, type) {
        super(brand, type);
    }
    info() {
        super.info();
        console.log("Able to play games!");
    }
    gaming() {
        super.run(); 
        console.log("Running PUBG and Valorant!");
    }
}
let laptop = new Laptop("HP", "type1");
let gameLaptop = new LaptopGaming("HP", "type2");

laptop.info();
laptop.run();
gameLaptop.info(); // HP type2 \nAble to play games!
gameLaptop.gaming();