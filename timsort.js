function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

function merge(arr, l, m, r) {
  const len1 = m - l + 1;
  const len2 = r - m;
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);

  let i = 0,
    j = 0,
    k = l;

  while (i < len1 && j < len2) {
    arr[k++] = left[i] <= right[j] ? left[i++] : right[j++];
  }

  while (i < len1) arr[k++] = left[i++];
  while (j < len2) arr[k++] = right[j++];
}

function timSort(arr) {
  const RUN = 32;
  const n = arr.length;

  // Step 1: Sort individual runs using Insertion Sort
  for (let i = 0; i < n; i += RUN) {
    insertionSort(arr, i, Math.min(i + RUN - 1, n - 1));
  }

  // Step 2: Merge runs using Merge Sort
  for (let size = RUN; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      if (mid < right) {
        merge(arr, left, mid, right);
      }
    }
  }

  return arr;
}

//v8 Uses Timsort for arrays with more than 10 elements.
// Engine	        Algorithm Used	   Notes
// V8 (Chrome)	    Timsort	           Fast for real-world data
// SpiderMonkey	    Merge/Quick	       Depends on data, version
// JavaScriptCore	Quick/Merge	       Varies based on implementation
