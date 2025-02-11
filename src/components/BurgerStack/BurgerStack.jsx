const BurgerStack = ({ingredients, removeFromBurger}) => {
    return (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => removeFromBurger(ingredient.name)}>X</button>
            </li>
          ))}
        </ul>
      );
    };
  
  export default BurgerStack;