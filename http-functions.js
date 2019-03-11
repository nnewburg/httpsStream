let https = require('https');

module.exports = function getHTML(options, callback) {


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