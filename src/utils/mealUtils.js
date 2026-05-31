export const getIngredients = (meal) =>
  Array.from({ length: 20 }, (_, i) => ({
    ingredient: meal[`strIngredient${i + 1}`],
    measure: meal[`strMeasure${i + 1}`],
  })).filter(({ ingredient }) => ingredient?.trim());

export const getInstructions = (meal) =>
  (meal.strInstructions ?? "")
    .split(/\r\n|\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
