export interface Ingredient {
  id: string;
  name: string;
  measure: string;
  unit: string;
}

export interface Step {
  id: string;
  step: string;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  steps: Step[];
}

export interface RecipeFormData {
  id: string;
  name: string;
  ingredients: Omit<Ingredient, "id">[];
  steps: string[];
}
