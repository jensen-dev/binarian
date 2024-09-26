// 3.polymorphism.js
//   1.Buat class Laptop dengan detail :
//   properti
//     - brand
//     - type

//   method
//   - run() return "{{ brand }} {{ type }} is on!"

//   2.Buat helper gamingCapability dengan detail :
//   - method gaming() return "Playing Apex Legend at 120fps!"

//   3.Buat helper editingCapability dengan detail :
//   - method editing() return "Edit and Render 8k projects!"

//   4.Buat class LaptopGaming dengan detail :
//   - method run() return super.run() dan gaming()

//   5.Buat class LaptopEditing dengan detail :
//   - method run() return super.run() dan editing()

//   6.Buat class LaptopHybrid dengan detail :
//   - method run() return super.run(), gaming() dan editing()

//   7.Buat object untuk masing2 class lalu console seperti contoh nomor 8.


// 1
class Laptop {
    constructor(brand, type) {
        if (this.constructor === Laptop) {
            throw new Error("Cannot instantiate Laptop class because it is abstract");
        }
        this.brand = brand;
        this.type = type;
    }
    run() {
        console.log(`${this.brand} ${this.type} is on!`);
    }
}
// 2
const gamingCapability = Base => class extends Base {
    gaming() {
        console.log("Playing Apex Legend at 120fps!");
    }
}
// 3
const editingCapability = Base => class extends Base {
    editing() {
        console.log("Edit and Render 8k projects!");
    }
}
// 4
class LaptopGaming extends gamingCapability(Laptop) {
    run() {
        super.run();
        super.gaming();
    }
}
// 5
class LaptopEditing extends editingCapability(Laptop) {
    run() {
        super.run();
        super.editing();
    }
}
// 6
class LaptopHybrid extends gamingCapability(editingCapability(Laptop)) {
    run() {
        super.run();
        super.gaming();
        super.editing();
    }
}

let laptop1 = new LaptopGaming("nintendo", "gamingType");
let laptop2 = new LaptopEditing("photoshop", "editingType");
let laptop3 = new LaptopHybrid("samsung", "hybridType");
laptop1.run();
console.log();
laptop2.run();
console.log();
laptop3.run();

// let laptop4 = new Laptop("sony", "sonyType");
let laptop5 = new LaptopHybrid("sony", "hybridType2");
laptop5.run();
laptop5.gaming();
laptop5.editing();
laptop5.run();