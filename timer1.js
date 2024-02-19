const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (args.length === 0) {
    return;
  }
  if (args[i] > 0 || typeof args[i] === 'number') {
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log(args[i]);
    }, args[i] * 1000);
  }
}
