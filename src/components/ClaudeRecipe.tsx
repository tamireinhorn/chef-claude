export default function ClaudeRecipe({recipe}: {recipe: string}) {
return (
    <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
            {recipe}
            </article>
    </section>
)
}