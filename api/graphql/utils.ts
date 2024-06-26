import { RecipeInput } from "./recipe.type";

interface Input {
  inputData: RecipeInput;
  withoutIndex?: boolean;
}

interface IngredientOutput {
  name: string;
  measure: string;
  unit: string;
}

interface Output {
  id?: string;
  name: string;
  ingredients: IngredientOutput[];
  ingredientNames: string[];
  steps: string[];
}

export const prepareRecipeInputForDb = ({
  inputData,
  withoutIndex,
}: Input): Output => {
  const { id, name, ingredients, steps } = inputData;

  const serializedIngredients = ingredients.map((ingredient) => ({
    ...ingredient,
  }));

  const serializedIngredientNames = serializedIngredients.map(
    ({ name }) => name
  );

  const serializedRecipeInput = {
    id,
    name,
    ingredients: serializedIngredients,
    ingredientNames: serializedIngredientNames,
    steps,
  };

  if (withoutIndex) {
    delete serializedRecipeInput.id;
  }

  return serializedRecipeInput;
};
