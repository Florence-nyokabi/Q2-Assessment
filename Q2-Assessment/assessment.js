// QUestion 1

// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

class StoryTeller extends Story {
    constructor(title, moral_lesson, age_group, community_origin, storyteller_name, story_length) {
      super(title, moral_lesson, age_group, story_length);
      this.community_origin = community_origin;
      this.storyteller_name = storyteller_name;
    }
  }
 
  class Translator extends Story {
    constructor(title, moral_lesson, age_group, story_length, origin_language, new_language) {
      super(title, moral_lesson, age_group, story_length);
      this.origin_language = origin_language;
      this.new_language = new_language;
    }
  }
 
  const story = new Story("The cat and the mouse", "Greediness", 5, "10 pages");
  console.log(story.display_details());
 
  const storyteller = new StoryTeller("The tortoise and the rabbit", "Friendship", 8, "English", "Lilian", 200);
 
  console.log(storyteller.display_details());
  console.log(`Storyteller Name: ${storyteller.storyteller_name}`);
  console.log(`Community Origin: ${storyteller.community_origin}`);
 
  const translator = new Translator("Africana", "diversity", 6, "20 pages", "swahili", "English");
  console.log(translator.display_details());
  console.log(`Origin Language: ${translator.origin_language}`);
  console.log(`New Language: ${translator.new_language}`);
 









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