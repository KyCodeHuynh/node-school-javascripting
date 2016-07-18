// Scope: "the set of variables, objects, and
// functions you have access to"

// Immediately Invoked Function Expressions (IIFEs)
// are immediately called: (expression)(), with that last
// () being the function call operator
// Variables inside of them are scoped to just that function
var a = 1, b = 2, c = 3;

(function firstFunction(){
    // This b shadows the outer one,
    // and is the one that would be 
    // used by any b-invoking code in this function
   var b = 5, c = 6;

    // We want output: a: 1, b: 8, c: 6
    // Deductively: "Where is a = 1? Within any of these functions"
    // "Where is b = 8? Only within secondFunction()"
    // "Where is c = 6? In the secondFunction() only"
    // So we place it in here
   (function secondFunction(){
       var b = 8;
       console.log("a: "+a+", b: "+b+", c: "+c);

       (function thirdFunction(){
           var a = 7, c = 9;

           (function fourthFunction(){
               var a = 1, c = 8;
               // Don't forget the semicolors after each IIFE!
               // Don't forget the function application operator ()!
           })();
       })();
   })();
})();

