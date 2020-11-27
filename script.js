// Products must have properties such as sku (article no.), Title, description, quantity in stock, 
// price. It must have a method that prints the product.
//  Clothes should have a class that inherits from products and adds to the property size. 
// • Toys must have a class that inherits from products and adds the property "age from". 
// • There must be a stock class that keeps track of all products in the store and how many are in stock of each product. 
// • There must be an inventory method that prints a list of all products and how many of the product there are.
//  • There must be a method that returns an object based on sku. If, for example, 
//there is a product "jacket" with sku "456" then you should be able to 
//search for the product by sending the article number to the method and get the item back. 
// • There must be a shopping basket that contains 0-n products. The shopping cart must 
//belong to a customer. The shopping cart must have a method for printing the contents of the basket. 
// The shopping cart must have a method for adding up the sum of the value of all products in the basket.
//  • The shopping cart must have methods for adding and removing products in the shopping cart.

//  • There must be a customer class that keeps track of names, order history and current shopping cart.
//  • There must be a purchase method that adds the shopping cart's content to the customer's purchase
// history with dates and reduces the stock value of the product



class Product{
    constructor( productSku, productTitle, productDesc, productQuantity, productPrice ){
        this.sku = productSku;
        this.title = productTitle;
        this.description = productDesc;
        this.quantityInStock = productQuantity;
        this.price = productPrice;
    }
    printProduct(){                                                                     //prints out the products
        console.log("Product: " + this.title + ",Description: " + this.description 
        + " and it's price = " + this.price);
    }

}

class Clothes extends Product{                                                                  //extends retrieves all product properties
    constructor( productSku, productTitle, productDesc, productQuantity, productPrice,size ){   //size is added as a new property
        super( productSku, productTitle, productDesc, productQuantity, productPrice);          //"super" redirects to the original constructor
        this.size = size;
    }
}

class Toys extends Product{
    constructor(productSku, productTitle, productDesc, productQuantity, productPrice, ageFrom){
        super(productSku, productTitle, productDesc, productQuantity, productPrice);
        this.ageFrom = ageFrom;
    }

}

class Stock{
    constructor(){
        this.listOfProducts = [];
    }
    addNewProduct(product){
        this.listOfProducts.push(product);
    }
    inventory(){
        for(let i=0; i<this.listOfProducts.length; i++){
            console.log("Product: " + this.listOfProducts[i].title 
            + ", Price: " + this.listOfProducts[i].price + ", Description :" 
            + this.listOfProducts[i].description + ", Sku: " + this.listOfProducts[i].sku );
        }
    }
    returnBySku(proSku){
        for(let i=0; i<this.listOfProducts.length; i++){
            if( this.listOfProducts[i].sku === proSku ){
                return this.listOfProducts[i];
            }
        }
    }

}

class Cart{
    constructor(){
        this.listOfItems = [];
    }
    addItemToCart(item){
        this.listOfItems.push(item);
    }
    removeItemFromCart(item){
        let index = this.listOfItems.indexOf(item);// indexOf- removes an object from the array.
        this.listOfItems.splice(index,1);
    }
    calculateAllPrices(){
        let sum = 0;
        for(let i=0; i<this.listOfItems.length; i++){
            sum += this.listOfItems[i].price;    
        } 
        return sum;
    }
    displayAllItems(){
        for(let i=0; i<this.listOfItems.length; i++){
            console.log( this.listOfItems[i].title + ", and it's Price = " 
            + this.listOfItems[i].price + ", quantity in Stock: " + this.listOfItems[i].quantityInStock + ", description:=" +this.description);
        }
    }

}

class Customer{
    constructor(name){
        this.name = name;
        this.history = [];
        this.customerCart = new Cart();
    }

    payment(){

        let d = new Date(); //Date displays the current date
        let customerItems = "";
        for(let i=0; i<this.customerCart.listOfItems.length; i++){
            customerItems += this.customerCart.listOfItems[i].title + "  ";
        }
        let eachPayment = customerItems + " " + d + " " + this.customerCart.calculateAllPrices(); 
        this.history.push( eachPayment );

        for(let i=0; i<this.customerCart.listOfItems.length; i++){
            this.customerCart.listOfItems[i].quantityInStock--;
        }

    }

}


//test the function
// let pro1 = new Product("an150","Skirt","Description1",4,200);
// let pro2 = new Product("dcf5","TShirt","Description1",3,500);
// let pro3 = new Product("asd23","Test","Description3",10,50);
// let clothes1 = new Clothes("mans25","Skirt","TestClothes",4,150,"Large");
// let clothes2 = new Clothes("as510","T-Shirt","TestClothes",2,180,"Medium");
// let clothes3 = new Clothes("wwe10","Clothes1","TestClothes",10,250,"X Large");
// let toy1 = new Toys("sx22","Buzzle","TestToy",2,50,"8-12");
// let toy2 = new Toys("asdt3","Toy2","TestToy",2,180,"2-5");
// let toy3 = new Toys("mjh4","Toy3","TestToy",10,250,"7-10");

// let stock1 = new Stock(); 
//  console.log( stock1.listOfProducts );
// stock1.addNewProduct(pro1);
// console.log( stock1.listOfProducts );
// stock1.addNewProduct(pro2);
// stock1.addNewProduct(pro3);
// stock1.addNewProduct(clothes1);
// stock1.addNewProduct(clothes2);
// stock1.addNewProduct(clothes3);
// stock1.addNewProduct(toy1);
// stock1.addNewProduct(toy2);
// stock1.addNewProduct(toy3);

// console.log( stock1.listOfProducts );
// stock1.inventory();

// let becky = new Customer("Becky");
// console.log("Becky is gonna see all items she bought first time: ");
// becky.customerCart.addItemToCart(pro1);
// becky.customerCart.addItemToCart(pro2);
// becky.customerCart.addItemToCart(clothes2);
// becky.customerCart.addItemToCart(toy1);
// becky.customerCart.displayAllItems();
// console.log( becky.customerCart.calculateAllPrices() );
// console.log("Becky removed an item: ");
// becky.customerCart.removeItemFromCart(pro2);
// becky.customerCart.displayAllItems();
// console.log( becky.customerCart.calculateAllPrices() );
// console.log("Becky wants to pay now: ");
// console.log("Becky's history before payment: " + becky.history.join() );
// becky.payment();
// console.log("Becky's history after payment: " + becky.history.join() );
// becky.customerCart.displayAllItems();

