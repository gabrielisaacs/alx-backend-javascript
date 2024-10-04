// Define and export the HolbertonClass before it's used
export class HolbertonClass {
  /**
   * Create a new HolbertonClass instance.
   *
   * @param {number} year - The year of the class.
   * @param {string} location - The location of the class.
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Getter for year.
   *
   * @returns {number} The year of the class.
   */
  get year() {
    return this._year;
  }

  /**
   * Getter for location.
   *
   * @returns {string} The location of the class.
   */
  get location() {
    return this._location;
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Define and export the StudentHolberton class
export class StudentHolberton {
  /**
   * Create a new StudentHolberton instance.
   *
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The class the student belongs to.
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass; // Assign the holbertonClass instance
  }

  /**
   * Getter for the full name.
   *
   * @returns {string} The full name of the student.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Getter for holbertonClass.
   *
   * @returns {HolbertonClass} The class the student belongs to.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Getter for the full student description.
   *
   * @returns {string} The full description of the student.
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create student instances
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export the list of students
export const listOfStudents = [
  student1,
  student2,
  student3,
  student4,
  student5,
];
