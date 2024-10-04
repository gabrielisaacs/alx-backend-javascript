import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  return [
    new ClassRoom(19), // Create ClassRoom with 19 students
    new ClassRoom(20), // Create ClassRoom with 20 students
    new ClassRoom(34), // Create ClassRoom with 34 students
  ];
}
