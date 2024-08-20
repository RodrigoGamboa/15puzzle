export function getRandomSeq(size: number) {
  const seq: number[] = [];
  while (seq.length < size) {
    const randomNum = getRandomInt(size);
    if (!seq.includes(randomNum)) {
      seq.push(randomNum);
    }
  }
  //   const newSeq = getLayeredSeq(seq);
  //   return newSeq;
  return seq;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getLayeredSeq(seq: number[]) {
  const size = Math.sqrt(seq.length);
  const newSeq = [];
  for (let i = 0; i < size; i++) {
    newSeq.push(seq.slice(size * i, size + size * i));
  }
  return newSeq;
}

export function getPosXY(seq: number[], index: number) {
  const size = Math.sqrt(seq.length);
  const x = Math.floor(index / size);
  const y = index - x * size;
  return [x, y];
}

export function getEmptySpaceIndex(seq: number[], index: number) {
  const size = Math.sqrt(seq.length);
  //   const x = Math.floor(index / size);
  //   const y = index - x * size;
  let emptySpaceIndex = null;
  if (seq[index - size] === 0) {
    emptySpaceIndex = index - size;
  } else if (seq[index + size] === 0) {
    emptySpaceIndex = index + size;
  }
  return emptySpaceIndex;
}
