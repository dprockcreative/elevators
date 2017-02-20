const cp = require('child_process');

cp.exec('npm install @types/core-js@0.9.35', {}, (error, stdout, stderr) => {
  process.stdout.write(stdout + '\n');
  process.stderr.write(stderr + '\n');

  if (error) {
    console.log(error);
  } else {
    cp.exec('npm install', {}, (error, stdout, stderr) => {
      process.stdout.write(stdout + '\n');
      process.stderr.write(stderr + '\n');
      if (error) {
        console.log(error);
      }
    });
  }
});
