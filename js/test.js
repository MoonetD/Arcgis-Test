function layerLoad()

{

  require(["esri/request", "esri/layers/FeatureLayer", "esri/Credential"],

    function(esriRequest, FeatureLayer, Credential) {

      var layers = [];

      var featureLayer;

      var layerOptions;

      var token = "L7yIuZW-h9ODkLRHOpnWpYlxHzHVIUdUgKQQKHqPLOVrNHMYi3clvlCTF6V5Xw64Xor-TUsUtrmfKXnQ5iomxO6_ltRRGFpq-UlO01C4XnIN6wSxjtHp15ciXeUIsEEA3cknZKsFKA1IrE_P28zmug..";

      var privateLayerUrl = "http://services.arcgis.com/u1pyDfVudZJk1pG6/arcgis/rest/services/Private_Layer/FeatureServer";

      var privateLayerWithToken = privateLayerUrl + "?token=" + token;

      var layersRequest = esriRequest({

        url: privateLayerWithToken,

        content: {
          f: "json"
        },

        //form:{ token: token },

        handleAs: "json",

        //callbackParamName: "callback"

      });

      var credentials = new Credential({

        userId: "eR4g2n1Qv1U18Od4", // App ID

        token: token

      });

      layersRequest.then(

        function(response) {

          layerOptions = {

            outFields: ["*"],

            mode: FeatureLayer.MODE_ONDEMAND,

            id: 55,

            //credential:credentials,

            visible: true

          };

          featureLayer = new FeatureLayer("http://services.arcgis.com/u1pyDfVudZJk1pG6/arcgis/rest/services/Private_Layer/FeatureServer/0", layerOptions);

          featureLayer.credential = credentials;

          layers.push(featureLayer);

          map.addLayers(response.layers);

          console.log("Success: ", response.layers);

        },

        function(error) {

          console.log("Error: ", error.message);

        });

    });

}
