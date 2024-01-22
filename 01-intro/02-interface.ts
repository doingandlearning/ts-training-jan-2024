// These are largely interchangeable!
// interface
// type

type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };
const bird3: BirdInterface = bird1; // Duck Typing

// If it looks like a duck, sounds like a duck, acts like a duck - it is a duck!

type Owl = BirdType & { nocturnal: true }; // Intersect
type Robin = BirdType & { nocturnal: false };

// type Robin = { redbreast: true };

interface Peacock extends BirdInterface {
  colourful: true;
  flies: false;
}

interface Chicken extends BirdType {
  colourful: false;
  flies: false;
}

interface Chicken {
  laysEggs: true;
}

let owl: Owl = { wings: 2 };
let chicken: Chicken = { wings: 2 };
