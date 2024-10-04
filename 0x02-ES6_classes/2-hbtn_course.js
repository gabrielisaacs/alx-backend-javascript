export default class HolbertonCourse {
  // Constructor to initialize course attributes
  constructor(name, length, students) {
    // Validate inputs when object is created
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type validation
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with type validation
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with type validation
  set students(value) {
    if (
      !Array.isArray(value) ||
      !value.every((student) => typeof student === 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
