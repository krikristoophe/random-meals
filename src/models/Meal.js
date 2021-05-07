class Meal {
  constructor(json) {
    this.id = json.idMeal;
    this.area = json.strArea;
    this.category = json.strCategory;
    if (json.strInstructions) {
      this.instructions = json.strInstructions
        .split('\r\n')
        .filter((step) => step.length > 0)
        .filter((step) => !step.toLowerCase().match(/step [0-9]+/g))
        .filter((step) => step.split(' ').length > 1)
        .map((step) => step.replace(/^[0-9]+[.]/g, ''))
        .map((step) => step.trim());
    } else {
      this.instructions = null;
    }

    this.title = json.strMeal;
    this.pictureUrl = json.strMealThumb;
    this.source = json.strSource;
    if (json.strTags) {
      this.tags = json.strTags
        .split(',')
        .filter((tag) => tag.length > 0);
    }
    this.youtube = json.strYoutube;
    this.ingredients = [];

    let end = false;
    let index = 1;

    while (!end) {
      const ingredientName = json[`strIngredient${index}`];
      const ingredientQuantity = json[`strMeasure${index}`];
      if (!ingredientName || ingredientName.length === 0) {
        end = true;
      } else {
        this.ingredients.push({
          name: ingredientName,
          quantity: ingredientQuantity,
        });
      }
      index += 1;
    }
  }
}

export default Meal;
