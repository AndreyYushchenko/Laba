const removeElements = (array, ...items) => {
  items.forEach(item => {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  });
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);

module.exports = removeElements;
