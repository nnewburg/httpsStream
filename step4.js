let https = require('https');

function getHTML(options, callback) {


  /* Add your code here */

  https.get(options, function (response){

  response.setEncoding('utf8');

  let chunk = "";
    response.on('data', function (data){
      chunk += data
      console.log('Chunk Received. Length:', data.length);
    });

    response.on('end', function() {
      callback(chunk);
    });

  });
};

function printHTML (html) {
  console.log(html);
}



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);