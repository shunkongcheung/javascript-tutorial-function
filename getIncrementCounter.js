/*
 * An example of the functionality of getCounter,
 * but in a functional design pattern manner
*/

const getIncrementCounter = (counter) =>{
	// instead of relying on external variable, 
	// it relies on argument to create new value
	const newValue = counter + 1

	// at the end of the function, 
	// there are no side-effect posted to any external variable
	return newValue
}


// This is the part that cares about counter. 
// Therefore, counter is defined here.
// In noraml situation, counter is not even visible to getIncrementCounter
let counter = 0
const firstResult = getIncrementCounter(counter) // firstResult = 1, counter = 0
counter = firstResult // this part of the code cares about counter and also responsible for managing counter


// since argument to getIncrementCounter is different, 
// therefore, we expects it to return a new value
const secondResult = getIncrementCounter(counter) // secondResult = 2, counter = 1
counter = secondResult

console.log(`Get Increment Counter: ${firstResult} ${secondResult}`)


