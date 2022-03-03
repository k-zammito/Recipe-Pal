export const unitConversion = (unit) => {
  if (unit === 'T') {
    unit === 'tbsp';
  }

  unit = unit.toLowerCase();

  if (unit === 'tablespoon' || unit === 'tablespoons' || unit === 'tb') {
    unit = 'tbsp';
  }

  if (unit === 't' || unit === 'teaspoon' || unit === 'teaspoons') {
    unit = 'tsp';
  }

  if (unit === 'ounces' || unit === 'ounce') {
    unit = 'oz';
  }

  if (unit === 'pounds' || unit === 'pound') {
    unit = 'lbs';
  }

  if (unit === 'grams' || unit === 'gram') {
    unit = 'g';
  }

  if (unit === 'c') {
    unit === 'cup';
  }

  return unit;
};
