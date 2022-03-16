const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const array = ids;
  if (!ids) {
    return [];
  }
  array.forEach((element) => species.filter(({ id }) => id === element));
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));
// return species.filter(({id}) => id === ids ); //funciona para um id apenas
module.exports = getSpeciesByIds;
