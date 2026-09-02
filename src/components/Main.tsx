import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"

    /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
     */
export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>( ["all the main spices", "pasta", "ground beef", "tomato paste"])

    const ingredientsList = ingredients.map(
        ingredient => 
        (<li key={ingredient}>{ingredient}</li>)
    )
    
    const [recipeShown, setRecipeShown] = useState<boolean>(false)

    function handleSubmit(formData: FormData) {
        const newIngredient = formData.get('ingredient')
        if (typeof newIngredient === 'string' && newIngredient.trim() !== ''){
        setIngredients(prevIngredientsList =>
           [...prevIngredientsList, newIngredient.trim()])

            }
   
    }

    function handleClick() {
        setRecipeShown(prevRecShown => !prevRecShown)
    }

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
                <ul className='ingredients-list'>
                    {ingredientsList}
                </ul>

                {ingredientsList.length >= 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={handleClick}>Get a recipe</button>
                </div>}
            </section>
            }
            {recipeShown &&  <ClaudeRecipe/>}
        </main>
    )
} 