function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the buffer
  const dataView = new DataView(buffer);

  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  // Return the DataView
  return dataView;
}

export default createInt8TypedArray;
