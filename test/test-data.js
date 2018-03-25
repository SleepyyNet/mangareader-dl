const path = require( "path" );
const fs = require( "mz/fs" );

const d = {};

d.baseUrl = "https://www.mangareader.net/shingeki-no-kyojin/103";
d.imgUrl = "https://i997.mangareader.net/shingeki-no-kyojin/103/shingeki-no-kyojin-10410955.jpg";
d.fileName = "shingeki-no-kyojin_103_1.jpg";
d.outputPath = path.resolve( __dirname, `../tmp/${d.fileName}` );
d.mangaBase = {
  name   : "shingeki-no-kyojin",
  chapter: 103,
  page   : 1,
  siteUrl: d.baseUrl,
};
d.manga = {
  name    : "shingeki-no-kyojin",
  chapter : 103,
  page    : 1,
  siteUrl : d.baseUrl,
  filename: "shingeki-no-kyojin_103_1.jpg",
  imgSrc  : d.imgUrl,
};

d.mangaPage2Base = {
  name   : d.manga.name,
  chapter: d.manga.chapter,
  page   : 2,
  siteUrl: `${d.baseUrl}/2`,
};
d.mangaPage2 = {
  name    : d.manga.name,
  chapter : d.manga.chapter,
  page    : 2,
  filename: "shingeki-no-kyojin_103_2.jpg",
  imgSrc  : "https://i998.mangareader.net/shingeki-no-kyojin/103/shingeki-no-kyojin-10410961.jpg",
  siteUrl : `${d.baseUrl}/2`,
};

d.mangaPage3 = {
  name    : d.manga.name,
  chapter : d.manga.chapter,
  page    : 3,
  filename: "shingeki-no-kyojin_103_3.jpg",
  imgSrc  : "https://i997.mangareader.net/shingeki-no-kyojin/103/shingeki-no-kyojin-10410967.jpg",
  siteUrl : `${d.baseUrl}/3`,
};

d.mangaPage39 = {
  name    : "shingeki-no-kyojin",
  chapter : 103,
  page    : 39,
  filename: "shingeki-no-kyojin_103_39.jpg",
  imgSrc  : "https://i996.mangareader.net/shingeki-no-kyojin/103/shingeki-no-kyojin-10411183.jpg",
  siteUrl : `${d.baseUrl}/39`,
};

d.mangaChapter100 = {
  name    : "shingeki-no-kyojin",
  chapter : 100,
  page    : 1,
  filename: "shingeki-no-kyojin_100_1.jpg",
  imgSrc  : "https://i9.mangareader.net/shingeki-no-kyojin/100/shingeki-no-kyojin-10120141.jpg",
  siteUrl : "https://www.mangareader.net/shingeki-no-kyojin/100",
};
d.mangaChapter101 = {
  name    : "shingeki-no-kyojin",
  chapter : 101,
  page    : 1,
  filename: "shingeki-no-kyojin_101_1.jpg",
  imgSrc  : "https://i7.mangareader.net/shingeki-no-kyojin/101/shingeki-no-kyojin-10239607.jpg",
  siteUrl : "https://www.mangareader.net/shingeki-no-kyojin/101",
};

d.mangaInvalidChapter = {
  name   : "shingeki-no-kyojin",
  chapter: 250,
  page   : 1,
  siteUrl: "https://www.mangareader.net/shingeki-no-kyojin/250",
};

d.siteUrlInvalidPage = `${d.baseUrl}/40`;
d.siteUrlInvalidChapter = "https://www.mangareader.net/shingeki-no-kyojin/250";

d.testBuffer = fs.readFileSync( path.resolve( __dirname, "test-img.jpg" ) );

module.exports = d;