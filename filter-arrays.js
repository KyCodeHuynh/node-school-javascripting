// arrayName.filter(function(args) { ... })
// Or give a function name instead
var numbers = [];
for (var i = 1; i < 11; i++) {
    numbers.push(i);
}

// Filter using a predicate function literal
var filteredNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
})

console.log(filteredNumbers);
