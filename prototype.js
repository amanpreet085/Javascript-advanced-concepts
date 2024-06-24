const myForEach = () => {
  console.log("hello from my for each");
};

const anObj = { myForEach };

Object.assign(Array.prototype, anObj);

const anArray = [1, 23, 4];

anArray.myForEach();

anArray.forEach(() => {});
