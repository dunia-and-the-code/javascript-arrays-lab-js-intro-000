var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}
  
function appendKitten(name) {
  kittens = [...kittens, name];
  return kittens;
}

function prependKitten(name) {
  return prependKitten(name);
}

function removeLastKitten() {
  return kittens.slice(-1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}

function addElementToEndOfArray(array, element) {
  array = [...array, 'foo']
  return array;
}
