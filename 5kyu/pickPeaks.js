function pickPeaks(arr) {
  const map = {
    pos: [],
    peaks: [],
  };

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] >= arr[i + 1]) {
      let j = i;

      while (j < arr.length - 1 && arr[j] === arr[j + 1]) {
        j++;
      }
      if (arr[j] > arr[j + 1]) {
        map["pos"].push(i);
        map["peaks"].push(arr[i]);
      }

      i = j;
    }
  }

  return map;
}

//console.log(pickPeaks([0, 1, 2, 5, 1, 0]));
//console.log(pickPeaks([0, 1, 3, 5, 6, 8]));
//console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
//console.log(pickPeaks([1, 2, 2, 2, 1]));

//console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]));
//console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
//console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]));
//console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]));
//console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]));
