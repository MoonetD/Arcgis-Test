const fetch = require("cross-fetch"); // npm install cross-fetch
const FormData = require("isomorphic-form-data"); // npm install isomorphic-form-data
let parameters = new FormData();
parameters.append('f', 'json');
parameters.append('token', "b-i8XGHLRUEYCjRNQ9FZIdQnMhdd0NdAz4z4aI-ft7qTnJncDR1kJm4l8PnASrIGW78OtNqHJWpDnVFWxohxNYhJvC-wbQRDJPmT-cj_rx-Jnu9gPiVhKQemeelkfnH9WJg-2clnRlCZw6_mxD5n7g..");

fetch('https://services.arcgis.com/8veDRDlhXWywYP3S/arcgis/rest/services/cleaned_drugcrime/FeatureServer/0', {
    method: 'POST',
    body: parameters
  })
  .then(function(response) {

      response.json()
      .then(function(arcgisResponse) {

        if (arcgisResponse.error) {
          console.log(response);
        } else {
          console.log(arcgisResponse);

        }
      })
      .catch(function(error) {
        //reject(error);
      })
  });
