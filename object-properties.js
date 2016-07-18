// Object properties, their key-value pairs,
// can be accessed and used via dot syntax:
// 
// object.property
// 
// Or via square-bracket syntax, like hashes in Ruby:
// 
// object['property']
// 
// NOTE: with brackets, the key must be given as a string
// I'm going to start using ES6's let and const, which are
// both block-scoped rather than function-scoped like var
const food = {
    types: 'only pizza'
};

console.log(food.types);


