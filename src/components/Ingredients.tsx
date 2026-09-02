type IngredientsProps = {
    ingredients: string[]
    onGetRecipe: () => void 
}


export default function Ingredients({ingredients, onGetRecipe}:IngredientsProps ) {

    const ingredientsList = ingredients.map(
        ingredient => 
        (<li key={ingredient}>{ingredient}</li>)
    )
    return (
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
                    <button onClick={onGetRecipe}>Get a recipe</button>
                </div>}
            </section>
    )
}