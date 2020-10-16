/*
 * An example of traditional function
	* */
function getSum (a, b) {
	const sum = a + b;
	return sum
}

const firstResult = getSum(1, 2)
const secondResult = getSum(3, 4)

const thirdResult  = getSum(1, 2)

console.log(`Results: ${firstResult} ${secondResult} ${thirdResult}`)
