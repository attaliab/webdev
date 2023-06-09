class recipeController {
    constructor(){
        this.recipeArray = [];
    }


    addRecipe(image, dish, ingredients, directions){
        const recipeObj = {
        image,
        dish,
        ingredients,
        directions
    }
    this.recipeArray.push(recipeObj)
    }

    setLocalStorage(){
        localStorage.setItem('recipe', JSON.stringify(this.recipeArray))
    }
    getLocalStorage(){
        let recipe = JSON.parse(localStorage.getItem('recipe'))
        return recipe
    }
}


const newRecipes = new recipeController();

newRecipes.addRecipe(
    'Dinner App/images/creamy-cajun-shrimp-pasta.jpg',
    'Creamy Cajun Shrimp Pasta',
    ['14oz Shrimp', '2 oz Baby spinach', '1 Bell pepper', '1 white onion', '4 Garlic cloves', '2 Lemons', 'Linguine', 'Black pepper', '2 tbsp Cajun seasoning', '2 tbsp Olive oil', '1 cup Heavy cream', 'Red pepper flakes'],
    ['Get all the prep done before you start cooking. Peel and devein the shrimp, pat dry with a paper towel. Combine with 1 tablespoon Cajun seasoning, ½ tsp salt, ½ black pepper, 1 teaspoon garlic powder and 1 tablespoon oil. Set aside. Dice the bell pepper, mince the garlic and finely chop the onion.',
    'Cook linguine according package directions in a large pot of generously salted boiling water.',
    'In the meantime, heat the butter and the remaining oil in a large nonstick skillet over medium high. Place the shrimp in a single layer, sear for 1 minute. Flip and sear the other side, 1 minute. Transfer to a clean plate.',
    'Add bell pepper, onion and garlic, sauté for 5 minutes, stirring occasionally. Stir in the remaining Cajun seasoning, salt and black pepper. Scoop up 1 cup pasta cooking water. Deglaze the skillet with ½ cup cooking water, reduce the heat and simmer for 2 minutes while scraping up the brown bits on the bottom of the skillet with a wooden spoon.',
    'Pour in cream and bring to a simmer. Add spinach and stir just until it starts to wilt. Next, stir in grated Parmesan and add lemon juice.',
    'When ready, drain the pasta and toss with sauce. Add shrimp, give it a good stir and add a splash of the remaining cooking water. Taste and adjust salt. Finish off with freshly ground black pepper and red pepper flakes. Serve immediately, enjoy!']
)

newRecipes.addRecipe(
    'Dinner App/images/Soba-noodle-salad.jpg',
    'Seasme-Ginger Cucmber Soba Noodle Salad',
    ['Soba noodles', '1 large Cucumber', 'Spinach', 'Cilantro', '1 Lime', 'Scallions', '2 cloves garlic', '2 tbsp Ginger', 'Seasme Seeds', '2-3 tbsp Rice wine vinegar', '1-2 tbsp Soy sauce', '1/2 tsp Sriracha', 'Honey', 'Red pepper flakes'],
    ['Cook soba noodles according to package. Once done, rinse the soba noodles under cool running water to cool them down and stop them from cooking, or they will turn mushy.', 'Mix honey, soy sauce, ginger, rice wine vinegar, and seasme seeds and set aside.', 'Cut cucumbers into 1/4 inch x 1 1/2 inch matchsticks pieces if you don not have a julienne tool.', 'Sautee garlic in a skillet until golden, then add shrimp.', 'Lightly sautee cucumbers and spinach.', 'In a bowl, put noodles, sauteed veggies, and shrimp topped with the sauce you set aside. Add cilantro and scallions and serve.' ]
)

// access the keys in newRecipes.recipeArray so that it can be displayed in the innerHTML div
console.log(newRecipes.recipeArray);


const sunday = document.getElementById('sunday');
const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const saturday = document.getElementById('saturday');

    const daysOfTheWeek = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]

    console.log(daysOfTheWeek);

    const displayData = function(days){
        for(i = 0; i < days.length; i++){
            days[i].innerHTML += `<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
            </div>`;        
        }
    };
displayData(daysOfTheWeek);