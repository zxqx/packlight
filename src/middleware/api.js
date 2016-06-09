import 'whatwg-fetch';

export async function fetchGearListSuggestions(keywords) {
  const res = await fetch(`/api/gear/${keywords}`);

  if (!res.ok) {
    return Promise.reject();
  }

  const data = await res.json();

  return processData(data);
}

function processData(data) {
  return data.map(product => {
    if (!productHasWeightAttribute(product)) return;

    const unit = getProductWeightUnit(product);
    const weight = getProductWeight(product);

    return {
      name: getProductName(product),
      weight: getWeightInLbs(unit, weight)
    };
  })
  .filter(product => !!product);
}

function productHasWeightAttribute(product) {
  return product.ItemAttributes &&
    product.ItemAttributes[0].ItemDimensions &&
    product.ItemAttributes[0].ItemDimensions[0].Weight;
}

function getProductName(product) {
  return product.ItemAttributes[0].Title[0];
}

function getProductWeightUnit(product) {
  return product.ItemAttributes[0].ItemDimensions[0].Weight[0].$.Units;
}

function getProductWeight(product) {
  return product.ItemAttributes[0].ItemDimensions[0].Weight[0]._;
}

function getWeightInLbs(unit, weight) {
  const weightConversionMap = {
    'grams': 0.00220462,
    'hundredths-pounds': 0.01,
    'ounces': 0.0625,
    'pounds': 1
  };

  return parseFloat(weight) * weightConversionMap[unit];
}
