/**
 * Represents a Holberton course with a name, length, and enrolled students.
 *
 * @class
 * @param {string} name - The name of the course.
 * @param {number} length - The duration of the course in weeks.
 * @param {string[]} students - An array of students enrolled in the course.
 */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

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
