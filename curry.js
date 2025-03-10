// 1 - Masala Foydalanuvchi istalgancha son kiritadi, kiritish tugagach, umumiy yig'indini chop etadi.
function sum(a) {
    if (a === undefined) {
      return 0;
    }
    return function (b) {
      if (b === undefined) {
        return a;
      }
      return sum(a + b);
    };
  }
  
  console.log(sum(1)(2)(3)(4)()); 
  console.log(sum(5)(10)(15)(20)(25)());
  
// 2 - Masala Infinity Currying bilan argumentlar soniga qarab natija qaytarish

function calc(...args) {
    return function next(b) {
      if (b === 0) {
        return args.reduce((acc, num) => acc + num, 0);
      }
      if (b === 1) {
        return args.reduce((acc, num) => acc * num, 1);
      }
      return calc(...args, b);
    };
  }
  
  console.log(calc(2)(3)(4)(0)); 
  console.log(calc(2)(3)(4)(1)); 
  
//   3 - Masala Infinity Currying va string concatenation

function concat(...args) {
    return function next(b) {
      if (b === undefined) {
        return args.join('');
      }
      return concat(...args, b);
    };
  }
  
  console.log(concat('Hello')(' ')('World')('!')()); 
  console.log(concat('This')(' is')(' a')(' test')('!')()); 

//   4 - Masala Infinity Currying bilan filter qoidasi

function filter(...args) {
    return function next(condition) {
      if (typeof condition === 'string') {
        if (condition === 'even') {
          return args.filter(num => num % 2 === 0);
        }
        if (condition === 'odd') {
          return args.filter(num => num % 2 !== 0);
        }
      }
      return filter(...args, condition);
    };
  }
  
  console.log(filter(1)(2)(3)(4)(5)(6)('even')); 
  console.log(filter(10)(25)(30)(45)(55)('odd')); 