const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const endpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    
  request(endpoint, (error,response,body) => {
    let errorMessage = null;
    let description = null;
    
    if (error) {
      return callback(error, description);
    }

    const data = JSON.parse(body);
    
    if (response.statusCode !== 200) {
      errorMessage = data.message;
    } else if (!data.length) {
      errorMessage = 'Invalid Breed!';
    } else {
      description = data[0].description;
    }
  
    callback(errorMessage, description);
    
  });

};

module.exports = { fetchBreedDescription };