/**
 * Returns an array of student objects with id, firstName, and location attributes.
 * @returns {Array<Object>} Array of student objects.
 */
export default function get_list_students(){
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
}

