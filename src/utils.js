const makeCounter = () => {
  let id = 1;
  return () => id++;
}
const getId = makeCounter();

module.exports = {
  getId,
};
