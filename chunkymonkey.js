function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  for (var i = 0; i < size; i++) {
    newArray.push(arr.splice(0, size));
  }
  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
