(function(){

  //allow to use the express library for me to use. just like brining in jQuery when we are in a browser
  let express = require("express");

  //app == whatever express returns. returns all the functionality you can do with express
  let app = express();

  app.get('/', function(req, res){

    res.send("<div>Hello world</div>");
  });

  app.get('/api/pets', function(req, res){

    res.send({
      "data": {
        "pets": [
      {
        "id": 1,
        "name": "Fluffy",
        "age": 5,
        "uri": "/api/pets/1"
      }, {
        "id": 2,
        "name": "Bob",
        "age": 6,
        "uri": "/api/pets/2"
      }
    ]
  }
})
});

app.get('/api/pets/1', function(req, res){

  res.send({

      "id": 1,
      "name": "Fluffy",
      "age": 5,
      "uri": "/api/pets/1"
    })
});

app.get('/api/pets/2', function(req, res){

  res.send({

      "id": 2,
      "name": "Bob",
      "age": 6,
      "uri": "/api/pets/2"
    })
});

  app.listen(4786, function() {
    console.log('Example app listening on port 4786!')
  });



})();
