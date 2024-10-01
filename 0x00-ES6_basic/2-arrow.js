export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Use 'this' directly in an arrow function
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood); // Add new neighborhood
    return this.sanFranciscoNeighborhoods; // Return updated list
  };
}
