function descSort(arr: number[]): number[] {
  const result = [...arr];
  const len = result.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (result[j] < result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

function mergeTwoAsc(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  for (; i < a.length && j < b.length;) {
    if (a[i] <= b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }

  for (; i < a.length; i++) result.push(a[i]);
  for (; j < b.length; j++) result.push(b[j]);

  return result;
}

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const c1desc = descSort(collection_1);

  const c1asc: number[] = [];
  for (let i = c1desc.length - 1; i >= 0; i--) {
    c1asc.push(c1desc[i]);
  }

  const merged = mergeTwoAsc(c1asc, collection_2);
  return mergeTwoAsc(merged, collection_3);
}

