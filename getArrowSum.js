/*
 * an example of arrow function
*/
const getArrowSum = (a, b) => {
	const sum = a + b;
	return sum
}

const firstResult = getArrowSum(1, 2)
const secondResult = getArrowSum(3, 4)

const thirdResult  = getArrowSum(1, 2)

console.log(`Arrow Results: ${firstResult} ${secondResult} ${thirdResult}`)
