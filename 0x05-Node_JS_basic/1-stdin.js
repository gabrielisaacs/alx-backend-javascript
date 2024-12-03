// Interactive stdin handling
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if input is coming from a pipe (non-interactive)
if (!process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit(0);
  });
} else {
  // Interactive mode
  process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name) {
      const trimmedName = name.toString().trim();
      process.stdout.write(`Your name is: ${trimmedName}\n`);
      process.stdin.pause();
    }
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
