/*
 * An example of non functional design pattern function
*/


let counter = 1 // an external variable

const getCounter = () => {
	const curValue = counter // getting value from external source
	counter ++ // increment external source
	return curValue
}


// note that for the two execution of getCounter,
// even though they have the same argument (no argument),
// their return value is different
// therefore, getCounter does not fulfill functional design pattern
//
const firstResult = getCounter() // first result is 1
const secondResult = getCounter () // second result is 2

console.log(`Get Counter Result: ${firstResult} ${secondResult}`)
