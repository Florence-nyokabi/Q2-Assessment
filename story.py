class Story:
    def __init__(self,title,story_length,age_group,moral_lesson):

        self.title= title
        self.story_length= story_length
        self.age_group=range(20)
        self.moral_lesson=moral_lesson

    def display_details(self):
        print("{self.title} is a story for children who are {self.age_group} years old. It is {self.story_length} long and has {self.moral_lesson} moral lessons.")
        
    def age_limit(self,age):
        for age in self.age_group:
            if age >10:
                return f"story is inappropriate for children"
            else:
                return f"Story is appropriate  for Children.”
                
first_story=Story("Abebo","45 minutes",30,"be discipline")
print(first_story.age_limit(10))
    
class  StoryTeller(Story):
    def __init__(self,origin_community,teller_name,title,story_length,age_group,moral_lesson):

        super().__init__(title,story_length,age_group,moral_lesson)

        self.origin_community= origin_community
        self.teller_name = teller_name
        
    
    def time_limit(self,story_limit):
        if self.story_length==story_limit:
            return f'Story limit rea'
        elif self.story_length<=story_limit:
            return f'Story is too long'
        else:
            return f" Story is too short"

            
            
            
first_storyteller=StoryTeller("Luganda","Wafula","Abebo",30,"40 min","be grateful")
print(first_storyteller.time_limit(20))

class Translator(Story):
    def __init__(self,title,story_length,age_group,moral_lesson,origin_laguage,new_language):
     
     super().__init__(title,story_length,age_group,moral_lesson)

     self.origin_language=origin_laguage
     self.new_language= new_language

    def language_in(self,lang) :
        language=["Luo","Swahili","kikuyu","Kamba","Luhya"]   

        for i in language:
            if lang ==i:
             
             return f"translate to {i}" 
            else:
              return  f'{self.origin_language}'

            
            
            
maureen=Translator("Abebo","40 min",30,"respect your elders","Luganda","kisii")
print(maureen.language_in("Luo"))









class Species:

    def __init__(self, name, diet, lifespan):
        self.name = name
        self.diet = diet
        self.lifespan = lifespan

    def get_name(self):
        return self.name

    def get_diet(self):
        return self.diet

    def get_lifespan(self):
        return self.lifespan


class Predator(Species):

    def __init__(self, name, diet, lifespan, prey_list):
        super().__init__(name, diet, lifespan)
        self.prey_list = prey_list

    def get_prey_list(self):
        return self.prey_list


class Prey(Species):

    def __init__(self, name, diet, lifespan, predator_list):
        super().__init__(name, diet, lifespan)
        self.predator_list = predator_list

    def get_predator_list(self):
        return self.predator_list


lion = Predator("Lion", "Carnivore", 15, ["Zebra", "Gazelle"])
zebra = Prey("Zebra", "Herbivore", 20, ["Lion", "Hyena"])

print(lion.get_name())
print(lion.get_diet())
print(lion.get_lifespan())
print(lion.get_prey_list())

print(zebra.get_name())
print(zebra.get_diet())
print(zebra.get_lifespan())
print(zebra.get_predator_list())