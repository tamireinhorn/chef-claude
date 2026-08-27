import { useState } from "react"
export default function Main() {

    const [ingredients, setIngredients] = useState<string[]>([])

    const ingredientsList = ingredients.map(
        ingredient => 
        (<li key={ingredient}>{ingredient}</li>)
    )
    

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()  
        console.log('Form submitted!')
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        if (typeof newIngredient === 'string' && newIngredient.trim() !== ''){
        setIngredients(prevIngredientsList =>
           [...prevIngredientsList, newIngredient.trim()])

            }
   
    }
    
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    aria-label="Add ingredient"
                    type="text"
                    placeholder="e.g oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <div className="ingredients-div">
            <h1 className="ingredients-title">Ingredients on hand:</h1>
            <ul>
                {ingredientsList}
            </ul>
            </div>
        </main>
    )
} 