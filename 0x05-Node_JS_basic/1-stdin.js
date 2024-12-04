process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Get user input and trim extra whitespace
  console.log(`Your name is: ${name}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});

// Ensure the program ends gracefully when piped input finishes
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
