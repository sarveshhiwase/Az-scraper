const cheerio = require("cheerio");

const getLowercaseandSpaceRemoved = (str) => {
  return str.replace(/\s+/g, "").toLowerCase();
};

const getLyrics = (html) => {
  $ = cheerio.load(html);
  const t = $(".col-xs-12")
    .contents()
    .map(function () {
      return $(this).html();
    })
    .get()
    .join(" ");
  const usage =
    "<!-- Usage of azlyrics.com content by any third-party lyrics provider is prohibited by our licensing agreement. Sorry about that. -->";
  const sad = t.indexOf(usage);
  const bad = t.indexOf("<script>");
  return t.slice(sad + usage.length, bad).trim();
};

module.exports = { getLowercaseandSpaceRemoved, getLyrics };
