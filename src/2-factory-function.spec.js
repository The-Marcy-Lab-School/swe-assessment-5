const path = require('path');
const ScoreCounter = require('score-tests');
const {
  bankAccountFactory,
} = require('./2-factory-function');

const testSuiteName = 'Factory Function Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => { });

describe(testSuiteName, () => {
  afterEach(() => {
    console.log.mockClear();
  });

  it('bankAccountFactory - object initialized with ONLY the expected methods', () => {
    const myAccount = bankAccountFactory();
    expect(Object.keys(myAccount)).toEqual(['checkBalance', 'add', 'subtract']);

    expect(typeof myAccount.checkBalance).toEqual('function');
    expect(typeof myAccount.add).toEqual('function');
    expect(typeof myAccount.subtract).toEqual('function');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('bankAccountFactory - checkBalance(): returns the current balance as a number', () => {
    const myAccount = bankAccountFactory(1000);
    expect(myAccount.checkBalance()).toEqual(1000);

    const account2 = bankAccountFactory(50);
    expect(account2.checkBalance()).toEqual(50);

    const account3 = bankAccountFactory(500);
    expect(account3.checkBalance()).toEqual(500);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('bankAccountFactory - an account value defaults to 0 if no argument is given', () => {
    const myAccount = bankAccountFactory();
    expect(myAccount.checkBalance()).toEqual(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('bankAccountFactory - add(): increases the balance and console logs a message', () => {
    // we randomize the values when testing to ensure that your solutions aren't hard-coded
    const startingBalance = Math.floor(Math.random() * 1000);
    const firstAmount = Math.floor(Math.random() * 1000);
    const secondAmount = Math.floor(Math.random() * 1000);
    const firstTotal = startingBalance + firstAmount;
    const secondTotal = firstTotal + secondAmount;

    const myAccount = bankAccountFactory(startingBalance);
    myAccount.add(firstAmount);
    expect(myAccount.checkBalance()).toEqual(firstTotal);
    expect(log).lastCalledWith(`$${firstAmount} added.`);

    myAccount.add(secondAmount);
    expect(myAccount.checkBalance()).toEqual(secondTotal);
    expect(log).lastCalledWith(`$${secondAmount} added.`);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('bankAccountFactory - subtract(): decreases the balance and logs a message', () => {
    const startingBalance = Math.floor(Math.random() * 1000);
    const firstAmount = Math.floor(Math.random() * 1000);
    const secondAmount = Math.floor(Math.random() * 1000);
    const firstTotal = startingBalance - firstAmount;
    const secondTotal = firstTotal - secondAmount;

    const myAccount = bankAccountFactory(startingBalance);
    myAccount.subtract(firstAmount);
    expect(myAccount.checkBalance()).toEqual(firstTotal);
    expect(log).lastCalledWith(`$${firstAmount} subtracted.`);

    myAccount.subtract(secondAmount);
    expect(myAccount.checkBalance()).toEqual(secondTotal);
    expect(log).lastCalledWith(`$${secondAmount} subtracted.`);

    const amountToGoNegative = 200;
    const myNegativeAccount = bankAccountFactory(100);
    myNegativeAccount.subtract(amountToGoNegative);
    expect(log).lastCalledWith(`$${amountToGoNegative} subtracted.`);
    expect(myNegativeAccount.checkBalance()).toEqual(-100);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
