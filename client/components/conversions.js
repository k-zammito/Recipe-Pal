export const unitConversion = (unit) => {
  if (unit === 'T') {
    unit === 'tbsp';
  }

  unit = unit.toLowerCase();

  if (
    unit === 'tablespoon' ||
    unit === 'tablespoons' ||
    unit === 'tb' ||
    unit === 'tbs'
  ) {
    unit = 'tbsp';
  } else if (unit === 't' || unit === 'teaspoon' || unit === 'teaspoons') {
    unit = 'tsp';
  } else if (unit === 'ounces' || unit === 'ounce') {
    unit = 'oz';
  } else if (unit === 'pounds' || unit === 'pound') {
    unit = 'lbs';
  } else if (unit === 'grams' || unit === 'gram') {
    unit = 'g';
  } else if (unit === 'c') {
    unit = 'cup';
  } else if (unit === 'table salt') {
    unit = 'salt';
  } else if (unit === '') {
    unit = 'medium';
  }

  return unit;
};
