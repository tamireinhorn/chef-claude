import { useState } from "react"
export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([])

    const ingredientsList = ingredients.map(
        ingredient => 
        (<li key={ingredient}>{ingredient}</li>)
    )
    

    function handleSubmit(formData: FormData) {
        const newIngredient = formData.get('ingredient')
        if (typeof newIngredient === 'string' && newIngredient.trim() !== ''){
        setIngredients(prevIngredientsList =>
           [...prevIngredientsList, newIngredient.trim()])

            }
   
    }
      /**
     * Challenge:
     * Using conditional rendering, only render the new <section> IF
     * there are ingredients added to the list of ingredients.
     */ 
    return (
        <main>
            <form className="add-ingredient-form" action={handleSubmit}>
                <input 
                    aria-label="Add ingredient"
                    type="text"
                    placeholder="e.g oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {
                ingredientsList.length > 0 && 
                <section className = "ingredients-div">
                <h2 className="ingredients-title">Ingredients on hand:</h2>
                <ul>
                    {ingredientsList}
                </ul>

                {ingredientsList.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>
            }
        </main>
    )
} 