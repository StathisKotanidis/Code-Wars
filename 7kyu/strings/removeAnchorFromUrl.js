function removeUrlAnchor(url) {
  return url.includes("#") ? url.slice(0, url.indexOf("#")) : url;
}

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));
console.log(removeUrlAnchor("'www.codewars.com/katas/'"));
