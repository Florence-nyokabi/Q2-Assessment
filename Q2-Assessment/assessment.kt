fun main() {
    var x = Product("mango", 10.0, 30)
    println(x.totalValue())
}

//Question 5
//
//Create a class called Product with attributes for name, price, and quantity.
//Implement a method to calculate the total value of the product (price * quantity).
//Create multiple objects of the Product class and calculate their total values.
//
//

//Input: attributes
//Output: total value
//
//class Product
//Attributes: name, price, quantity
//Method: total value

class Product(var name: String, var price: Double, var quantity: Int){
    fun totalValue(): Double{
        return price * quantity
    }
}


//6. Implement a class called Student with attributes for name, age, and grades (a
//list of integers). Include methods to calculate the average grade, display the
//student information, and determine if the student has passed (average grade >=
//60). Create objects for the Student class and demonstrate the usage of these
//methods.
//
//Input: name, age, grades
//Output: average grade, studentinfo, ifpassed
//Process: create a class Student
//Method-> average grade
//-> display info
//-> if passed

class Student(var name: String, var age: Int, var grades: Array<Double>, var average: Double){
    var x = 0.0
    fun averageGrade(): Double{
        for (i in grades){
           x += i
        }
        average =  x / grades.size
        return average
    }
    fun determinePassing(){
        if (average >= 60){
            println(" The student has passed with an average of $average marks.")
        }else{
            println("The student has failed.")
        }
    }
    
    fun displayStudentDetails():String{
        return "The student name is $name, $age years old."
    }
}

//7. Create a FlightBooking class that represents a flight booking system. Implement
//methods to search for available flights based on destination and date, reserve
//seats for customers, manage passenger information, and generate booking
//confirmations.
//
//Input: destination, date, seats
//Output: passessnger info, booking confirmation
//Process: create class with attributes
//Methods -> reserve seat, manage passenger information, and generate booking
//confirmations.
class FlightBooking(var passengerName: String, var destination: String, var seatsNumber: Int, var date: String){
    fun reserveSeat():String{
        return "Reserve $seatsNumber for $passengerName flying to $destination on $date."
    }
    fun passengerInformation():String{
        return "The passenger name is: $passengerName they are flying to $destination on $date, They have reserved $seatsNumber seats."
    }
    fun bookingConfirmation():String{
        return "Flight booking confirmed for: $passengerName flying to $destination on $date, They have reserved $seatsNumber seats."
    }
}

//8. Create a LibraryCatalog class that handles the cataloging and management of
//books in a library. Implement methods to add new books, search for books by
//title or author, keep track of available copies, and display book details.
//
//Input: book title, author, no_of_copies
//Output: new book,
//Process: create a class with attributes
//Method -> add, search, keep track and display
class LibraryCatalog(var bookTitle: String, var author: String, var numberOfCopies: Int){
    fun addBook(new: String, bookList: List<String>){
        bookList.add(new)
    }
    fun searchBook(bookToSearch: String):String{
        for(i in bookList){
            if (bookToSearch == i){
                return "Book found"
            }
        }
    }
    fun displayInformation():String{
        return "Book is: $bookTitle, by $author and available copies is : $numberOfCopies"
    }
}