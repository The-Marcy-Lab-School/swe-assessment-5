# Object Oriented Programming Assessment

Welcome to your Object Oriented Programming Assessment! This is a tougher assessment than last time, but you know what's also tougher? You. You can do this, because all you have to do is your best.

Let's get started!

> Remember to `npm i` to install dependencies.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [What resources can you use?](#what-resources-can-you-use)
  - [Before you start](#before-you-start)
  - [That's a lot of tests](#thats-a-lot-of-tests)
  - [Running tests effectively](#running-tests-effectively)
- [Section 0: Factory Functions](#section-0-factory-functions)
- [Section 1: Has Many / Belongs To](#section-1-has-many--belongs-to)
- [Section 2: Inheritance \& Polymorphism](#section-2-inheritance--polymorphism)
  - ["Why can't I see my logs in the test?"](#why-cant-i-see-my-logs-in-the-test)

## Overview

### What resources can you use?

This is an open book assessment which means you can use the [Marcy Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) and other internet resources. However, please do not talk to other fellows and **do not use any AI resources**. We need to see what *you* know from this assessment.

### Before you start

Before you are 3 sections:

* Factory Functions
* Has Many / Belongs To
* Inheritance & Polymorphism

It's recommended that before you do anything, take a deep breath and let that useless adrenaline run out of you. Seriously, do that. **Do it.**

Ok, now that you're chill(er), it's time to start thinking about the assessment. It's always recommended that you **scan over the entire thing before starting** to code. This will let you see where you might run into big roadblocks or have speed boosts. This will help you plan your time more effectively.

### That's a lot of tests

You're about to see a lot of tests. Do not panic. You got this!

Test files are often a few hundred lines due to their repetitive nature. Sure the *file* is 200 lines long, but each isolated test is only a 2-10 lines long. Just like you've seen *a million* times now.

A test will pass if the `expect()` statements inside are all successful. When reading a test, ask yourself
* What inputs is the test providing to my function?
* What is the expected output of my function?
* Are there any expected side effects?

How do you rock an assessment? One test at a time. Work small, test often, keep moving forward.

### Running tests effectively

> Did you run `npm i` yet?

The prompts are super lightweight because you *need* to be reading the tests. We recommend using `npm run test:w`. This will activate jest's "watch" mode, which automatically re-runs the tests on every file save.

Remember, while in watch mode if you hit `w`, a menu of options opens. These options allow you to focus on only running certain test or certain test files.

For example hitting `p` and then typing `from-scratch` it will only run tests from a file that matches that name. You can hit `a` to go back to running all tests.

Hit `ctrl` and `c` to exit watch mode.

You go this!

## Section 0: Factory Functions

Remember this? In the `0-factory-function.js` file, you'll find a `bankAccountFactory` function waiting for you.

This time, you won't be using classes. You'll be going back to day 1 of OOP and building a factory function that uses closure to keep its data private.

Your function should return an object with methods for manipulating that private data.

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

### "Why can't I see my logs in the test?"

Because we are testing how and when you use `console.log`, we are "mocking it" — we are taking control of it and changing its behavior.

So, `console.log` what you need to in order to pass the test; but if you want to see some extra debugging output, use `console.info` instead since we haven't overwritten that function.

OR! Just use the `playground.js` file to mess around, that will log everything like normal. Run that file with `node playground.js`.

**Now get out there and good luck!**
