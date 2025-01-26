export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];


function Recipe({id, name, ingredients } : { id : string, name: string, ingredients: Set<string> }) {
  return (
    <li key = {id}>
      <h2>{name}</h2>
      <ul>
        {Array.from(ingredients).map(ingredient =>
          <li key={ingredient}>{ingredient}</li>
        )}
      </ul>
    </li>
  );
}


export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe =>
          <Recipe
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
          />
        )}
      </ul>
    </div>
  );
}