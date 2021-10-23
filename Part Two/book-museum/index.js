const fetch = require("node-fetch");

exports.handler = async (evt) => {
  let response = await fetch(
    "https://ncav9b7051.execute-api.us-east-2.amazonaws.com/Prod/museum",
    {
      method: "POST",
      body: JSON.stringify(evt),
    }
  );

  // get the response as json
  let json = await response.json();
  return json;
};
