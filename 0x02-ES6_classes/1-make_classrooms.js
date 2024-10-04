// Import the ClassRoom class from 0-classroom.js
import ClassRoom from "./0-classroom.js";

/**
 * Initializes and returns an array of ClassRoom objects.
 * @returns {Array} An array containing three ClassRoom objects
 * with max student sizes of 19, 20, and 34.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19), // ClassRoom with 19 students
    new ClassRoom(20), // ClassRoom with 20 students
    new ClassRoom(34), // ClassRoom with 34 students
  ];
}
