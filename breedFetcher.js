const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const endpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    
  request(endpoint, (error,response,body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    
    if (response.statusCode !== 200) {
      return callback(Error(data.message),null);
    }
    
    if (!data.length) {
      return callback(Error('Invalid Breed!'),null);
    }

    callback(null, data[0].description);
    
  });

};

module.exports = { fetchBreedDescription };