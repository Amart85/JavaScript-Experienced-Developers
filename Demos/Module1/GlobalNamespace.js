// This function will calculate the factorial of any given number
var factorial = function(n){
	return !(n > 1) ? 1 : arguments.callee(n-1) * n;
}

console.log(factorial(10));
