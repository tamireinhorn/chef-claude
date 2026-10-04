import { useEffect, useState, useRef } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import Ingredients from "./Ingredients"
import {getRecipeFromMistral} from "../ai.js"

export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>( ["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipe, setRecipe] = useState<string>("")

    const recipeSection = useRef<HTMLDivElement>(null)

    function handleSubmit(formData: FormData) {
        const newIngredient = formData.get('ingredient')
        if (typeof newIngredient === 'string' && newIngredient.trim() !== ''){
        setIngredients(prevIngredientsList =>
           [...prevIngredientsList, newIngredient.trim()])

            }
   
    }
    

    useEffect(() => {
        if (recipe !== "" && recipeSection.current){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe]) 

    async function getRecipe() {
        const recipeMD = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMD)
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
                ingredients.length > 0 && 
               <Ingredients ref={recipeSection} ingredients={ingredients} onGetRecipe={getRecipe}/>
            }
            {recipe &&  <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
} 