// Task 0
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an async API call
    setTimeout(() => {
      // resolve with a dummy response
      resolve({
        status: 200,
        body: 'photo-profile-1',
      });
    }, 1000); // Simulate a delay of 1 second
  });
}

export default getResponseFromAPI;
