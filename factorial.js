/*
 * An example of recursion
*/

const factorial  = (n, isDebug)  => {
	if(isDebug) console.log(`Entering factorial: ${n}`)
	
	// 1st of the function body: 
	// exit condition
	if (n <= 1) return 1


	// 2rd of the function body:
	// recursively execution
	const nMinusOne = n -1
	if(isDebug) console.log(`N - 1: ${nMinusOne}`)
	const nMinusOneFactorial = factorial(nMinusOne, isDebug)

	// 3nd of the functionbody: 
	// divide and conqure - n * (n-1)!
	const nFactorial = nMinusOneFactorial * n

	return nFactorial
}


console.log('Getting 1!....')
const oneFactorial = factorial(1, true)
console.log()

console.log('Getting 2! ....')
const twoFactorial = factorial(2, true)
console.log()

console.log('Getting 6! ....')
const sixFactorial = factorial(6, false)
console.log()

console.log(`Factorial results: ${oneFactorial}, ${twoFactorial}, ${sixFactorial}`)
