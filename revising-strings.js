var pizza = 'pizza is alright';
// Without reassigning, the replace() results go nowhere
// The replace() is NOT an in-place mutation; this implies a
// copying of the original string
pizza = pizza.replace('alright', 'wonderful');
// The order is replace('old', 'new')
console.log(pizza);
