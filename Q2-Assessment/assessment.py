# Question 1

# **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.

class Story:
    def __init__(self, title, moral_lesson, age_group, story_length):
        self.title = title
        self.moral_lesson = moral_lesson
        self.age_group = age_group
        self.story_length = story_length
    
    def display_details(self):
        return f"{self.title} is a story for children who are {self.age_group} years old. It is {self.story_length} long has {self.moral_lesson} moral lessons."

class StoryTeller(Story):
    def __init__(self, title, moral_lesson, age_group, community_origin, storyteller_name,story_length):
        
        # super().__init__(title, moral_lesson, age_group)
        super().__init__(title, moral_lesson, age_group,story_length)


        self.community_origin = community_origin
        self.storyteller_name = storyteller_name
        

class Translator(Story):
    def __init__(self, title, moral_lesson, age_group, story_length, origin_language, new_language):

        # super().__init__(story_length, age_group, moral_lesson)
        super().__init__(title, moral_lesson, age_group, story_length)

        self.origin_language = origin_language
        self.new_language = new_language

    def translate(self, origin_language):
        languages = []
        for i in languages:
            if origin_language == i:
                return f"Translate the story to ${i}"
        

story = Story("The cat and the mouse", "Greediness", 5, "10 pages")
print(story.display_details())

storyteller = StoryTeller("The tortoise and the rabbit", "Friendship", 8, "English", "Lilian",200)


print(storyteller.display_details())
print(f"Storyteller Name: {storyteller.storyteller_name}")
print(f"Community Origin: {storyteller.community_origin}")


translator = Translator("Africana", "diversity", 6, "20 pages", "swahili", "English")

print(translator.display_details())
print(f"Origin Language: {translator.origin_language}")
print(f"New Language: {translator.new_language}")



# Question 2
#  **African Cuisine:** 
# You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with its own unique properties and
# methods.
class Recipe:
    def __init__(self, country):
        self.country = country

    def recipe_preparation(self):
        if self.country == "Nigeria":
            self.prepare_nigerian()
        elif self.country == "Ethiopia":
            self.prepare_ethiopian()
        elif self.country == "Morocco":
            self.prepare_moroccan()
        else:
            print("Recipe is unavailable.")
            
    def prepare_nigerian(self):
        print("The Nigerian recipe is:")
        print("Step 1: Gather ingredients")
        print("Step 2: Season the chicken with spices and let it marinate.")
        print("Step 3:  Add onions, garlic, and peppers in a pot.")
        print("Step 4: Add the chicken")
        print("Step 5: Stir")
        print("Step 6: Serv.")
        
    def prepare_ethiopian(self):
        print("The Ethiopian recipe is:")
        print("Step 1: Gather ingredients")
        print("Step 2: Season the chicken with spices and let it marinate.")
        print("Step 3:  Add onions, garlic, and peppers in a pot.")
        print("Step 4: Add the chicken")
        print("Step 5: Stir")
        print("Step 6: Serve.")
        
    def prepare_moroccan(self):
        print("The Moroccan recipe is:")
        print("Step 1: Gather ingredients")
        print("Step 2: Season the chicken with spices and let it marinate.")
        print("Step 3:  Add onions, garlic, and peppers in a pot.")
        print("Step 4: Add the chicken")
        print("Step 5: Stir")
        print("Step 6: Serve.")
        
        
country = input("Enter a country: ")
recipe = Recipe(country)
recipe.recipe_preparation()


# Question 5

# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.


# Input: attributes
# Output: total value

# class Product
# Attributes: name, price, quantity
# Method: total value

class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    def calculate_total_value(self, value_of_product):
        value_of_product = self.price * self.quantity
        return f"The total value of {self.name} is: {value_of_product}"
    


# 6. Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# methods.

# Input: name, age, grades
# Output: average grade, studentinfo, ifpassed
# Process: create a class Student
#            Method-> average grade
#                -> display info
#                     -> if passed

class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.grades = []
    def find_average_grade(self, average, first_grade):
        first_grade = 0
        for i in self.grades:
            first_grade += i
            return first_grade
        average = first_grade / self.grades.length
        if average >= 60:
            return f"The average mark for student {self.name} is: {average}. The student has passed."
        else:
            return f"The average mark for student {self.name} is: {average}. The student has not passed."
    
    
    def display_student_information(self):
        return f"The student name is {self.name} who is {self.age} years old. The student has the following scores: {self.grades} and an average grade of: {average}"
    
    


# 7. Create a FlightBooking class that represents a flight booking system. Implement
# methods to search for available flights based on destination and date, reserve
# seats for customers, manage passenger information, and generate booking
# confirmations.

# Input: destination, date, seats
# Output: passessnger info, booking confirmation
# Process: create class with attributes
#         Methods -> reserve seat, manage passenger information, and generate booking
# confirmations.

class FlightBooking:
    def __init__(self, passenger_name, destination, date, no_of_seats):
        self.passenger_name = passenger_name
        self.destination = destination
        self.date = date
        self.no_of_seats = no_of_seats

    def reserve_seat(self):
        return f"Reserve {self.no_of_seats} for {self.passenger_name} flying to {self.destination} on {self.date}"
    def passenger_information(self):
        return f"The passenger name is: {self.passenger_name} they are flying to {self.destination} on {self.date}, They have reserved {self.no_of_seats} seats."
    def generate_booking_confirmations(self):
        return f"Flight booking confirmed for: {self.passenger_name} flying to {self.destination} on {self.date}, They have reserved {self.no_of_seats} seats."
   


# 8. Create a LibraryCatalog class that handles the cataloging and management of
# books in a library. Implement methods to add new books, search for books by
# title or author, keep track of available copies, and display book details.

# Input: book title, author, no_of_copies
# Output: new book, 
# Process: create a class with attributes
#       Method -> add, search, keep track and display

class LibraryCatalog:
    def __init__(self, book_title, author, no_of_copies):
        self.book_title = book_title
        self.author = author
        self.no_of_copies = no_of_copies
        self.bookList = []
    def add_new_book(self, new_book):
        self.bookList.append(new_book)
        return f"A new book {new_book} has been added to our library."
    def search_book(self, book_to_be_searched):
        for i in self.bookList:
            if book_to_be_searched == self.book_title:
                return f"The book {book_to_be_searched} is available."
            else:
                return f"The book {book_to_be_searched} is unvailable at the moment."
    def display_book_information(self):
        return f"The book title is: {self.book_title}, written by: {self.author} and the total amount of available copies is: {self.no_of_copies}"