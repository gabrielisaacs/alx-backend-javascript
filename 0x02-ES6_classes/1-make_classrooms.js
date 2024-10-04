// Import the ClassRoom class from 0-classroom.js
import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  return [
    new ClassRoom(19), // ClassRoom with 19 students
    new ClassRoom(20), // ClassRoom with 20 students
    new ClassRoom(34), // ClassRoom with 34 students
  ];
}
