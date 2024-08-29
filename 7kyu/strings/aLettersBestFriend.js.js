function bestFriend(txt, a, b) {
  return txt
    .split(" ")
    .filter((word) => word.includes(a))
    .every((word) => {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === a && word[i + 1] != b) {
          return false;
        }
      }
      return true;
    });
}

console.log(bestFriend("he headed to the store", "h", "e"));
console.log(bestFriend("we found your dynamite", "d", "y"));
console.log(bestFriend("", "z", "h"));
console.log(bestFriend("h", "z", "h"));
console.log(bestFriend("abhc", "z", "h"));
console.log(bestFriend("zh", "h", "z"));
console.log(bestFriend("ll", "l", "l"));
console.log(bestFriend("a test", "t", "e"));
