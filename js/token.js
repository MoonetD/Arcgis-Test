const fetch = require("cross-fetch"); // npm install cross-fetch
const FormData = require("isomorphic-form-data"); // npm install isomorphic-form-data
let parameters = new FormData();
parameters.append('f', 'json');
parameters.append('client_id', "qgWbGT4vVtJ5VBLz");
parameters.append('client_secret', "1549c3bab3e74d8a90603fd2634697d2");
parameters.append('grant_type', 'client_credentials');
parameters.append('expiration', 1440);

fetch(
  "https://www.arcgis.com/sharing/rest/oauth2/token",
  { method: 'POST', body: parameters })
.then(function(response) {
console.log(response);
    response.json()
    .then(function(arcgisResponse) {
      console.log(arcgisResponse);
      if (arcgisResponse.error) {
        // response failed
        reject(new Error(arcgisResponse.error.message));
      } else {
        var access_token = arcgisResponse.access_token; // expires in 1440 minutes
        console.log(access_token);
      }
    })
    .catch(function(error) {
        reject(error);
    })
});
