
/**
 * Example of chained callbacks
 */

function a(next) {
  console.log('a');
  next();
}

function b(next) {
  console.log('b');
  next();
}

function c(next) {
  console.log('c');
  next();
}

function d(next) {
  console.log('d');
  next();
}


let fns = [a,b,c,d];

// chain function will call the supplied function
// and recursively call the chain method with the
// the next eleemnt in the array
function chain(fn) {
  if(fn) {
    fn(() => chain(fns.shift()));
  }
}

// start the chain with the first element in the array
chain(fns.shift());