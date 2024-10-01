export default function appendToEachArrayValue(array, appendString) {
  let index = 0; // Initialize index
  for (const value of array) {
    array[index++] = appendString + value; // Update and increment index
  }

  return array;
}
