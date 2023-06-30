fun main() {
    var x = Product("mango", 10.0, 30)
    println(x.totalValue())
}



open class Story( val title: String, val moralLesson: String, val ageGroup: Int, val storyLength: String) {
    fun displayDetails(): String {
        return "$title is a story for children who are $ageGroup years old. It is $storyLength long and has $moralLesson moral lessons."
    }
}

class StoryTeller( title: String, moralLesson: String, ageGroup: Int, val communityOrigin: String, val storytellerName: String, storyLength: Int
): Story(title, moralLesson, ageGroup, storyLength.toString())

class Translator(title: String,moralLesson: String,ageGroup: Int,storyLength: String, val originLanguage: String, val newLanguage: String
) : Story(title, moralLesson, ageGroup, storyLength)

fun main() {
    val story = Story("Beautiful Nyakio", "Wealth greediness", 5, "10 pages")
    println(story.displayDetails())

    val storyteller = StoryTeller("cockroach and the snail", "Friendship", 8, "English", "Maureen", 200)
    println(storyteller.displayDetails())
    println("Storyteller Name: ${storyteller.storytellerName}")
    println("Community Origin: ${storyteller.communityOrigin}")

    val translator = Translator("Linet", "Community", 6, "20 pages", "swahili", "English")
    println(translator.displayDetails())
    println("Origin Language: ${translator.originLanguage}")
    println("New Language: ${translator.newLanguage}")
}





import java.util.Scanner

class Recipe(private val country: String) {

    fun prepareRecipe() {
        when (country) {
            "Morocco" -> prepareMoroccanRecipe()
            "Ethiopia" -> prepareEthiopianRecipe()
            "Nigeria" -> prepareNigerianRecipe()
            else -> println("Recipe not available for this country.")
        }
    }

    private fun prepareMoroccanRecipe() {
        println("Preparing Moroccan recipe...")
    }

    private fun prepareEthiopianRecipe() {
        println("Preparing Ethiopian recipe...")
    }

    private fun prepareNigerianRecipe() {
        println("Preparing Nigerian recipe...")
    }
}

fun main() {
    val scanner = Scanner(System.`in`)
    print("Enter a country (Morocco, Ethiopia, Nigeria): ")
    val country = scanner.nextLine()

    val recipe = Recipe(country)
    recipe.prepareRecipe()

    when (country) {
        "Nigeria" -> {
            println("The Nigerian recipe is:")
            println("Step 1: Gather ingredients")
            println("Step 2: Season the chicken with spices and let it marinate.")
            println("Step 3: Add onions, garlic, and peppers in a pot.")
            println("Step 4: Add the chicken")
            println("Step 5: Stir")
            println("Step 6: Serve.")
            println("It takes 60 mins.")
        }
        "Ethiopia" -> {
            println("The Ethiopian recipe is:")
            println("Step 1: Gather ingredients")
            println("Step 2: Season the chicken with spices and let it marinate.")
            println("Step 3: Add onions, garlic, and peppers in a pot.")
            println("Step 4: Add the chicken")
            println("Step 5: Stir")
            println("Step 6: Serve.")
            println("It takes 60 mins.")
        }
        "Morocco" -> {
            println("The Moroccan recipe is:")
            println("Step 1: Gather ingredients")
            println("Step 2: Season the chicken with spices and let it marinate.")
            println("Step 3: Add onions, garlic, and peppers in a pot.")
            println("Step 4: Add the chicken")
            println("Step 5: Stir")
            println("Step 6: Serve.")
            println("It takes 60 mins.")
        }
        else -> println("Recipe is unavailable")
    }
}


// Question 3
open class Species(var name: String, var diet: String, var lifespan: Int) {
    fun getName(name: String): String {
        return name
    }

    fun getDiet(diet: String): String {
        return diet
    }

    fun getLifespan(lifespan: Int): Int {
        return lifespan
    }
}

class Predator(name: String, diet: String, lifespan: Int, var preyList: List<String>) : Species(name, diet, lifespan) {
    fun getPreyList(preyList: List<String>): List<String> {
        return preyList
    }
}

class Prey(name: String, diet: String, lifespan: Int, var predatorList: List<String>) : Species(name, diet, lifespan) {
    fun getPredatorList(predatorList: List<String>): List<String> {
        return predatorList
    }
}

fun main() {
    val cheetah = Predator("cheetah", "Carnivore", 15, listOf("Antelope", "Gazelle"))
    val antelope = Prey("antelope", "Herbivore", 20, listOf("leopard", "Hyena"))

    println(cheetah.getName("Cheetah"))
    println(cheetah.getDiet("Carnivore"))
    println(cheetah.getLifespan(15))
    println(cheetah.getPreyList(listOf("Antelope", "Gazelle")))

    println(antelope.getName("Antelope"))
    println(antelope.getDiet("Herbivore"))
    println(antelope.getLifespan(20))
    println(antelope.getPredatorList(listOf("leopard", "hyena")))
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