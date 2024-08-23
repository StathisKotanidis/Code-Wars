function friend(friends) {
  return friends.filter((word) => word.length === 4);
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
