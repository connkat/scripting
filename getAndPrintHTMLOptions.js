var https = require("https");

function getAndPrintHTML(options) {
    var options = requestOptions;
  https.get(options, function(response) {
    var body = "";
    response.on("data", chunk => {
      body += chunk;
    });

    response.on("end", () => {
      console.log(body);
    });
  });
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step2.html"
};

module.exports(getAndPrintHTML);
