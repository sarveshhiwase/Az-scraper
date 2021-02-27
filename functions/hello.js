const rp = require("request-promise");
const { getLowercaseandSpaceRemoved, getLyrics } = require("../helpers/helper");

exports.handler = async (event, context) => {
  const { artist, song } = event.queryStringParameters;
  console.log(artist, song);
  const url = `https://www.azlyrics.com/lyrics/${getLowercaseandSpaceRemoved(
    artist
  )}/${getLowercaseandSpaceRemoved(song)}.html`;
  const proxiedRequest = rp.defaults();
  try {
    //Handle Success
    const html = await proxiedRequest.get(url);
    console.log(html)
    const lyrics = getLyrics(html);
    const sendObj = { lyrics };
    return {
      statusCode: 200,
      body: JSON.stringify(sendObj),
    };
  } catch (e) {
    //handle error
    console.log(e)
    const sendError = { error: "Sorry song or artist couldn't be found" };
    return {
      statusCode: 404,
      body: JSON.stringify(sendError),
    };
  }
};
