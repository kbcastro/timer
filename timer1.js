const timer = process.argv.slice(2);
timer.sort(function(a, b) {
  return a - b;
});

for (const time of timer) {
  if (time >= 0 && !isNaN(time)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}