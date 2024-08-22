export function getResultSeq(size: number): number[] {
  const seq: number[] = [];
  for (let i = 0; i < size - 1; i++) {
    seq.push(i + 1);
  }
  seq.push(0);
  return seq;
}

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

export function getCountCorrectPositions(
  result: number[],
  seq: number[]
): number {
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === seq[i]) {
      count++;
    }
  }
  return count;
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Reference: https://www.geeksforgeeks.org/check-instance-15-puzzle-solvable/
function isSeqSolvable(seq: number[]): boolean {
  const size = Math.sqrt(seq.length);
  const inversionCount = getInversionCount(seq);
  const numRowBlankFromBottom = getNumRowBlankFromBottom(seq);
  // If N is odd, then puzzle instance is solvable if number of inversions is even in the input state.
  if (!isEven(size) && isEven(inversionCount)) {
    return true;
  }
  // If N is even, puzzle instance is solvable if
  if (isEven(size)) {
    if (
      // the blank is on an even row counting from the bottom (second-last, fourth-last, etc.) and number of inversions is odd.
      (isEven(numRowBlankFromBottom) && !isEven(inversionCount)) ||
      // the blank is on an odd row counting from the bottom (last, third-last, fifth-last, etc.) and number of inversions is even.
      (!isEven(numRowBlankFromBottom) && isEven(inversionCount))
    ) {
      return true;
    }
  }
  return false;
}

// Thinking the sequence is a N*N (2D) matrix,
// Return number of row in which empty space (0) is located,
// counting from the bottom.
function getNumRowBlankFromBottom(seq: number[]): number {
  const emptySpaceIndex = getBlankIndex(seq);
  const size = Math.sqrt(seq.length);
  const y = Math.floor(emptySpaceIndex / size);
  return size - y;
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

function getBlankIndex(seq: number[]): number {
  return seq.indexOf(0);
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

// function getLayeredSeq(seq: number[]): number[][] {
//   const size = Math.sqrt(seq.length);
//   const newSeq = [];
//   for (let i = 0; i < size; i++) {
//     newSeq.push(seq.slice(size * i, size + size * i));
//   }
//   return newSeq;
// }

export function getPosXY(seq: number[], index: number): [number, number] {
  const size = Math.sqrt(seq.length);
  const x = Math.floor(index / size);
  const y = index - x * size;
  return [x, y];
}

// TODO: Refactor this code to return boolean isEmptySpaceNeighbour or something like that.
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
