const request = require('request');
const breed = process.argv[2];
const endpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(endpoint, (error,response,body) => {
  
  if (error) {
    return console.log('There was an error with the request');
  }
  const data = JSON.parse(body);

  if (response.statusCode !== 200) {
    return console.log(data.message);
  }
  
  console.log(data[0].description);

});
