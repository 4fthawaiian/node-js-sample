var express = require('express')
var app = express()
var myArgs = process.argv.slice(2);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

var server = app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

if(myArgs[0] === "TestRun") {
    console.log("Test run - will exit after 10 seconds");
    setTimeout(function () {
        server.close(function () {
            console.log("exiting gracefully");
            process.exit(0);
        });
    }, 10000)
}
