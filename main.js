// //------------------PYTHON SCRIPT------------------------
// var PythonShell = require('python-shell');

// PythonShell.run('script.py', function (err, results) {
//   if (err) throw err;
//   console.log(results);
// });

//------------------NPM-PYTHON------------------------
var python=require('python').shell;
 
// a callback to handle the response
var mycallback = function(err, data) {
   if (err) {
     console.error(err);
   } else {
     console.log("Callback function got : " + data);
   }
};
 
// to test, read and execute commands from stdin
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
   python(chunk, mycallback);
});