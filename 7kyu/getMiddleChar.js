function getMiddle(s) {
  let y = s.split("");

  if (y.length % 2 == 0) {
    for (let i = 0; i < y.length; i++) {
      for (let j = -1; j < y.length; j++) {
        if (y.length > 2) {
          y.shift();
          y.pop();
        }
      }
    }
  } else {
    for (let i = 0; i < y.length; i++) {
      for (let j = -1; j < y.length; j++) {
        if (y.length > 1) {
          y.shift();
          y.pop();
        }
      }
    }
  }

  return y.join(""); //its working fine here but not in code wars :(
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
console.log(
  getMiddle(
    "'XYEmgtoqbGjTjsUjdZbOTmojumrQADnUSFeAiUHZwSrKpGQsACMXkIKYzJKIPJSHVhoAZPXKwoFVPjMxqGiGZoVeHLkedCnQTTEGIGvJqcsvHJtELYHOTlCfwjvcCOBGFrwiLxuxxjAPSMQhZqzK'"
  )
);
console.log(getMiddle("siap"));

//other solution
function getMiddle(s) {
  let length = s.length;
  let middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return s[middle - 1] + s[middle];
  } else {
    return s[middle];
  }
}

//Community solutions

function getMiddle(s) {
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}
