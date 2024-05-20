class products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayItems(){
        console.log(`Name : ${this.name} \nPrice: ${this.price}`);
    }
    addTax(tax){
        
    }
}

const product1 = new products('shirt', 200);
product1.displayItems();