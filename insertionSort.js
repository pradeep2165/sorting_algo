function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Element to insert
    let j = i - 1;

    // Move elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key; // Insert the key in the correct position
  }
  return arr;
}
//js Uses Insertion Sort for small arrays (≤10 elements).
