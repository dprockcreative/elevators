const del = require('del');
const cp = require('child_process');

del(['./node_modules']).then(paths => {
  console.log('Deleted files and folders:\n', paths.join('\n'));
	cp.exec('npm install', {}, function(error, stdout, stderr) {
    process.stdout.write(stdout + '\n');
    process.stderr.write(stderr + '\n');
    if (error) {
      console.log(error);
    }
  });
});
