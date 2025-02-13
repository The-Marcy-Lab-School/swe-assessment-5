# Object-Oriented Programming Assessment

**Take a deep breath** and let that adrenaline run out of you. You got this!

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [What resources can you use?](#what-resources-can-you-use)
  - [Before you start](#before-you-start)
  - [Running tests effectively](#running-tests-effectively)
  - ["Why can't I see my logs in the test?"](#why-cant-i-see-my-logs-in-the-test)
- [Section 0: Factory Functions](#section-0-factory-functions)
- [Section 1: Has Many / Belongs To](#section-1-has-many--belongs-to)
- [Section 2: Inheritance \& Polymorphism](#section-2-inheritance--polymorphism)

## Overview

### What resources can you use?

This is an open book assessment which means you can use the [Marcy Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) and other internet resources. However, please do not talk to other fellows and **do not use any AI resources**. We need to see what *you* know from this assessment.

### Before you start

After cloning down the repo, run `npm i` to install dependencies.

Before you are 3 sections:

* Section 0: Factory Functions
* Section 1: Has Many / Belongs To
* Section 2: Inheritance & Polymorphism

Each section has a file in the `src/` directory and an associated test file in the `tests/` directory.

As you work on a section, you should also open up the corresponding `tests/*.spec.js` file.

### Running tests effectively

> Did you run `npm i` yet?

A test will pass if the `expect()` statements inside are all successful. When reading a test, ask yourself
* What inputs is the test providing to my function?
* What is the expected output of my function?
* Are there any expected side effects?

We recommend using `npm run test:w`. This will activate jest's "watch" mode, which automatically re-runs the tests on every file save.

Remember, while in watch mode if you hit `w`, a menu of options opens. These options allow you to focus on only running certain test or certain test files.

For example hitting `p` and then typing `from-scratch` it will only run tests from a file that matches that name. You can hit `a` to go back to running all tests.

Hit `ctrl` and `c` to exit watch mode.

You can also use `npm run test` to run tests manually.

### "Why can't I see my logs in the test?"

Because we are testing how and when you use `console.log`, we are "mocking it" — we are taking control of it and changing its behavior.

So, `console.log` what you need to in order to pass the test; but if you want to see some extra debugging output, use `console.info` instead since we haven't overwritten that function.

OR! Just use the `playground.js` file to mess around, that will log everything like normal. Run that file with `node playground.js`.

**Now get out there and good luck! You got this!**

## Section 0: Factory Functions

Remember this? In the `0-factory-function.js` file, you'll find a `bankAccountFactory` function waiting for you.

This time, you won't be using classes. You'll be going back to day 1 of OOP and building a factory function that uses closure to keep its data private.

Your function should return an object with methods for manipulating data made private through closure.

## Section 1: Has Many / Belongs To

In this section, you must build 2 classes `ToDoList` and `ToDoItem` in the `1-has-many-belongs-to.js` file. **Your task is to create the basic properties and methods required for the relationship to work**. The tests for these files are in `1-has-many-belongs-to.spec.js`.

But wait, theres more!

**You must add at least 1 instance method and property to each class.** But feel free to add more! 1 each is just what the tests require. Get creative!

* In order to keep the primary tests passing, make sure that your custom properties come *after* the required parameters (if at all).
* Run your tests constantly to make sure you don't accidentally break anything, ok?

To be nice, we've kick started the code a little bit with an ID utils function.

## Section 2: Inheritance & Polymorphism

Inside the `2-inheritance-polymorphism.js` file you'll see 2 classes:

* A `Phone` class
* An `AppleIPhone` class

Your mission is to get all the tests to pass. There are a *lot* of tests and they'll tell you exactly what to build. Here are some tips for reading tests to write code:

* Read the test names! Those say what the test is looking for in plain english.
* What are the function signatures (what arguments do you need and what types of data do they expect)?
* Are the methods pure or do they rely on some internal state? Do they have side effects?
* Does the function console log? Return something? Both? Neither?? WHAT DOES IT DO?!
* Are your methods and properties *spelled* correctly?
* Do any classes inherit from any others?

## You Got This!
