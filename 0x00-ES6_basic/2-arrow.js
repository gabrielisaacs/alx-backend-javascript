export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Use a regular function to maintain the proper `this` context
  this.addNeighborhood = function(newNeighborhood) {
    this.sanFranciscoNeighborhoods.push(newNeighborhood); // Add new neighborhood
    return this.sanFranciscoNeighborhoods; // Return updated list
  };
}
