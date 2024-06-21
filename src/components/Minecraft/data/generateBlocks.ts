function generateSequence(repetitions: number, maxNumber: number) {
  let sequence = [];

  for (let i = 1; i <= maxNumber; i++) {
    for (let j = 0; j < repetitions; j++) {
      sequence.push(i);
    }
  }
  return sequence;
}

const repetitions = 7;
const maxNumber = 10;

const numberOfSequence = (index: number) => {
  return generateSequence(repetitions, maxNumber)[index];
};

export { numberOfSequence, generateSequence };
