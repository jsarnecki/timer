let args = process.argv.slice(2);
for (let elm of args) {
  if (isNaN(elm)) {
    console.log(`${elm} is not a number`);
    process.exit();
  }
  if (elm < 0) {
    console.log("Can't process a negative number")
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(elm) * 1000);
};