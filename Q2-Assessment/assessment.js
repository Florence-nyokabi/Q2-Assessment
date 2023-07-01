// QUestion 1

// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// class StoryTeller extends Story {
//     constructor(title, moral_lesson, age_group, community_origin, storyteller_name, story_length) {
//       super(title, moral_lesson, age_group, story_length);
      this.community_origin = community_origin;
      this.storyteller_name = storyteller_name;
    }
  
 
//   class Translator extends Story {
//     constructor(title, moral_lesson, age_group, story_length, origin_language, new_language) {
//       super(title, moral_lesson, age_group, story_length);
//       this.origin_language = origin_language;
//       this.new_language = new_language;
//     }
//   }
 
//   const story = new Story("The cat and the mouse", "Greediness", 5, "10 pages");
//   console.log(story.display_details());
 
//   const storyteller = new StoryTeller("The tortoise and the rabbit", "Friendship", 8, "English", "Lilian", 200);
// }
//   console.log(storyteller.display_details());
//   console.log(`Storyteller Name: ${storyteller.storyteller_name}`);
//   console.log(`Community Origin: ${storyteller.community_origin}`);
 
//   const translator = new Translator("Africana", "diversity", 6, "20 pages", "swahili", "English");
//   console.log(translator.display_details());
//   console.log(`Origin Language: ${translator.origin_language}`);
//   console.log(`New Language: ${translator.new_language}`);
 


// Question 2
// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

class Recipe {
    constructor(country) {
      this.country = country;
    }
  
    prepare_recipe() {
      if (this.country === "Morocco") {
        this.moroccan_recipe();
      } else if (this.country === "Ethiopia") {
        this.ethiopian_recipe();
      } else if (this.country === "Nigeria") {
        this.nigerian_recipe();
      } else {
        console.log("Recipe not available.");
      }
    }
  
    moroccan_recipe() {
      console.log("Make a Moroccan recipe.");
    }
  
    ethiopian_recipe() {
      console.log("Make an Ethiopian recipe.");
    }
  
    nigerian_recipe() {
      console.log("Make a Nigerian recipe.");
    }
  }
  
  const country = prompt("Enter a country: ");
  const recipe = new Recipe(country);
  recipe.prepare_recipe();
  
  if (country === "Nigeria") {
      console.log("The Nigerian recipe is:");
      console.log("Step 1: Gather ingredients");
      console.log("Step 2: Season the chicken with spices and let it marinate.");
      console.log("Step 3:  Add onions, garlic, and peppers in a pot.");
      console.log("Step 4: Add the chicken");
      console.log("Step 5: Stir");
      console.log("Step 6: Serve.");
      console.log("It takes 60 mins.");
  }
  else if(country === "Ethiopia"){
      console.log("The Ethiopian recipe is:");
      console.log("Step 1: Gather ingredients");
      console.log("Step 2: Season the chicken with spices and let it marinate.");
      console.log("Step 3:  Add onions, garlic, and peppers in a pot.");
      console.log("Step 4: Add the chicken");
      console.log("Step 5: Stir");
      console.log("Step 6: Serve.");
      console.log("It takes 60 mins.");
  }
  else if(country === "Moroccan"){
      console.log("The Ethiopian recipe is:");
      console.log("Step 1: Gather ingredients");
      console.log("Step 2: Season the chicken with spices and let it marinate.");
      console.log("Step 3:  Add onions, garlic, and peppers in a pot.");
      console.log("Step 4: Add the chicken");
      console.log("Step 5: Stir");
      console.log("Step 6: Serve.");
      console.log("It takes 60 mins.");
  }
  else{
      console.log("Recipe is unavailable");
  }
  

// Question 3
class Species {
    constructor(name, diet, lifespan) {
        this.name = name;
        this.diet = diet;
        this.lifespan = lifespan;
    }
   
    getName() {
        return this.name;
    }
   
    getDiet() {
        return this.diet;
    }
   
    getLifespan() {
        return this.lifespan;
    }
 }
 
 class Predator extends Species {
    constructor(name, diet, lifespan, preyList) {
        super(name, diet, lifespan);
        this.preyList = preyList;
    }
   
    getPreyList() {
        return this.preyList;
    }
 }
 
 class Prey extends Species {
    constructor(name, diet, lifespan, predatorList) {
        super(name, diet, lifespan);
        this.predatorList = predatorList;
    }
   
    getPredatorList() {
        return this.predatorList;
    }
 }
 
 const cheetah = new Predator("cheetah", "Carnivore", 15, ["Antelope", "Gazelle"]);
 const antelope = new Prey("antelope", "Herbivore", 20, ["leopard", "Hyena"]);
 
 console.log(cheetah.getName());
 console.log(cheetah.getDiet());
 console.log(cheetah.getLifespan());
 console.log(cheetah.getPreyList());
 
 console.log(antelope.getName());
 console.log(antelope.getDiet());
 console.log(antelope.getLifespan());
 console.log(antelope.getPredatorList());
 































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