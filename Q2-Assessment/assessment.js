// Question 5

// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.


// Input: attributes
// Output: total value

// class Product
// Attributes: name, price, quantity
// Method: total value

class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;

        function calculateTotalValue(productValue) {
            productValue = this.price * this.quantity
            return "The total value of `${this.name}` is:`{productValue}`"
        }
    }
    calculateTotalValue()
}
