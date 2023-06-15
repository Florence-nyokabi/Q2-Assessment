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

// 6. Implement a class called Student with attributes for name, age, and grades (a
//     list of integers). Include methods to calculate the average grade, display the
//     student information, and determine if the student has passed (average grade >=
//     60). Create objects for the Student class and demonstrate the usage of these
//     methods.
    
//     Input: name, age, grades
//     Output: average grade, studentinfo, ifpassed
//     Process: create a class Student
//                Method-> average grade
//                    -> display info
//                         -> if passed

class Student{
    constructor(name, age, grades){
        this.name = name
        this.age = age
        this.grades = []

        function getAverage(average){
            firstGrade = 0
            for(i in grades){
                firstGrade.push(i)
            }
            average = firstGrade / grades.length
            return average
        }
        function determinePass(){
            if (average >= 60){
                return "Student passed."
            }
            else{
                return "Student did not pass"
            }
        }
        function displayInformation(){
            return "The student name is `${this.name},  `${this.age}`"
        }
    }
}