var chocolateBars = ['snickers', 'hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array, element) {
  var new_array = array.slice();
  new_array.unshift(element);
  return new_array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var new_array = array;
  new_array.unshift(element);
  return new_array;
}

function addElementToEndOfArray(array, element) {
  var new_array = array.slice();
  new_array.push(element);
  return new_array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.pop.push(element);
  return array;
}

function accessElementInArray() {

}

function destructivelyRemoveElementFromBeginningOfArray() {

}

function destructivelyRemoveElementFromEndOfArray() {

}

function removeElementFromEndOfArray(array) {

}
