export function getRandomSeq(size: number): number[] {
  const seq: number[] = [];
  while (seq.length < size) {
    const randomNum = getRandomInt(size);
    if (!seq.includes(randomNum)) {
      seq.push(randomNum);
    }
  }
  if (!isSeqSolvable(seq)) {
    getRandomSeq(size);
  }
  return seq;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function isSeqSolvable(seq: number[]): boolean {
  const size = Math.sqrt(seq.length);
  const inversionCount = getInversionCount(seq);
  if (!isEven(size) && isEven(inversionCount)) {
    return true;
  }
  if (isEven(size)) {
  }
  // TODO: return false;
  return true;
}

// Thinking the sequence is a N*N (2D) matrix,
// Return number of row in which empty space (0) is located,
// counting from the bottom.
function getRowCountEmptySpaceFromBottom(seq: number[]): number {
  return 0;
}

function getInversionCount(seq: number[]): number {
  const arr = removeEmptySpace([...seq]);
  let inversionCount = 0;
  // TODO: Transform nested loop into single loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        inversionCount++;
      }
    }
  }
  return inversionCount;
}

function removeEmptySpace(seq: number[]): number[] {
  const emptySpaceIndex = seq.indexOf(0);
  seq.splice(emptySpaceIndex, 1);
  return seq;
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getLayeredSeq(seq: number[]): number[][] {
  const size = Math.sqrt(seq.length);
  const newSeq = [];
  for (let i = 0; i < size; i++) {
    newSeq.push(seq.slice(size * i, size + size * i));
  }
  return newSeq;
}

export function getPosXY(seq: number[], index: number): [number, number] {
  const size = Math.sqrt(seq.length);
  const x = Math.floor(index / size);
  const y = index - x * size;
  return [x, y];
}

export function getEmptySpaceIndex(
  seq: number[],
  index: number
): number | null {
  const size = Math.sqrt(seq.length);
  //   const x = Math.floor(index / size);
  //   const y = index - x * size;
  let emptySpaceIndex = null;
  if (seq[index - size] === 0) {
    emptySpaceIndex = index - size;
  } else if (seq[index + size] === 0) {
    emptySpaceIndex = index + size;
  } else if (index % size !== 0 && seq[index - 1] === 0) {
    emptySpaceIndex = index - 1;
  } else if (index % size !== size - 1 && seq[index + 1] === 0) {
    emptySpaceIndex = index + 1;
  }
  return emptySpaceIndex;
}
