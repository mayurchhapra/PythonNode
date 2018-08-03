var PythonShell = require('python-shell');

PythonShell.run('script.py', function (err, results) {
  if (err) throw err;
  console.log(results);
});