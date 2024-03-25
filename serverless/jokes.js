//serverless function
//this doesn't run in our application - it runs on a server

//const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url = "https://icanhazdadjoke.com/";
  try {
    const jokeStream = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    })
    const jsonJoke = await jokeStream.json()
    return {
      statusCode: 200,
      body: JSON.stringify(jsonJoke)
    };
  } catch (error) {
    console.log(error)
    return {statusCode: 422, body: error.stack };
  }
}
 