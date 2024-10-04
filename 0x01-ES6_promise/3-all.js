// task 3
import { uploadPhoto, createUser } from './utils'; // import functions

export default function handleProfileSignup() {
  const uploadPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([uploadPromise, userPromise])
    .then((responses) => { // resolve promises
      const photoResponse = responses[0];
      const userResponse = responses[1];

      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
