const fetch = require("node-fetch");

exports.handler = async (evt) => {
  // hotel's booking process
  // https://ncav9b7051.execute-api.us-east-2.amazonaws.com/Prod

  // make request
  let response = await fetch(
    "https://ncav9b7051.execute-api.us-east-2.amazonaws.com/Prod/hotel",
    {
      method: "POST",
      body: JSON.stringify(evt),
    }
  );

  // get the response as json
  let json = await response.json();
  return json;
};
