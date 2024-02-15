# Object Oriented Programming Assessment

Welcome to your Object Oriented Programming Assessment! This is a tougher assessment than last time, but you know what's also tougher? You. You can do this, because all you have to do is your best.

Let's get started!

> Remember to `npm i` to install dependencies.

## Table of Contents

* [Overview](#overview)
  * [What resources can you use?](#what-resources-can-you-use)
  * [Before you start](#before-you-start)
  * [That's a lot of tests](#thats-a-lot-of-tests)
  * [Running tests effectively](#running-tests-effectively)
* [Section 1: Has Many / Belongs To](#section-1-has-many--belongs-to)
* [Section 2: Inheritance \& Polymorphism](#section-2-inheritance--polymorphism)
* [Section 3: Factory Functions](#section-3-factory-functions)
  * ["Why can't I see my logs in the test?"](#why-cant-i-see-my-logs-in-the-test)

## Overview

### What resources can you use?

This is an open book assessment which means you can use your notes and Google. However, please do not talk to other fellows and do not use any AI resources. We need to see what *you* know from this assessment.

### Resources from this module

* **1/29/24 - Encapsulation & Closures** | [Repo with Code](https://github.com/The-Marcy-Lab-School/5-0-0-encapsulation-factories-closure-f23) | [Recording](https://youtu.be/zVYpcVLxXe8)

* **1/30/24 - Class Basics** | [Repo with Code](https://github.com/The-Marcy-Lab-School/5-0-1-classes-f23) | [Recording](https://youtu.be/Zl0MRLBTdq0)
* **1/31/24 - Private Properties, Static Methods** | [Repo with Code](https://github.com/The-Marcy-Lab-School/5-0-2-private-properties-static-methods) | [Recording](https://youtu.be/2CjQjFLbZBk)
* **2/1/24 - Review** | [Repo with Code](https://github.com/benspector-mls/5-0-3-oop-review) | [Recording](https://youtu.be/yOBKtgitVK8)
* **2/5/24 - Has Many/Belongs To** | [Repo with Code](https://github.com/The-Marcy-Lab-School/5-1-0-has-many-belongs-to-f23) | [Recording](https://youtu.be/994yn_IKogQ)
* **2/5/24 - Lab review** | [Recording](https://youtu.be/MIOupwTF-2M)
* **2/6/24 - Implementing Has Many/Belongs To** | [Repo with Code](https://github.com/The-Marcy-Lab-School/5-1-1-has-many-belongs-to-front-end)
* **2/8/24 - Extending Classes** | [Repo with Code](https://github.com/The-Marcy-Lab-School/5-1-3-inheritance-polymorphism-f23)

### Additional Resources

* [W3 Schools - What is `this`?](https://www.w3schools.com/js/js_this.asp)
* [MDN - What is a closure?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [What are Factory Functions?](https://www.javascripttutorial.net/javascript-factory-functions/)
* [What is Polymorphism?](https://www.youtube.com/watch?v=YkhLw5tYR6c&ab_channel=dcode)
* [Classes are great but... use Composition Instead of Inheritance](https://www.youtube.com/watch?v=nnwD5Lwwqdo)

### Before you start

Before you are 3 sections:

* Has Many / Belongs To
* Inheritance & Polymorphism
* Factory Functions

It's recommended that before you do anything, take a deep breath and let that useless adrenaline run out of you. Seriously, do that. **Do it.**

Ok, now that you're chill(er), it's time to start thinking about the assessment. It's always recommended that you **scan over the entire thing before starting** to code. This will let you see where you might run into big roadblocks or have speed boosts. This will help you plan your time more effectively.

### That's a lot of tests

You're about to see a lot of tests. Do not panic. You got this!

Test files are often a few hundred lines due to their repetitive nature. Sure the *file* is 200 lines long, but each isolated test is only a 2-10 lines long. Just like you've seen *a million* times now.

How do you rock an assessment? One test at a time. Work small, test often, keep moving forward.

For each test ask yourself:

* What are the inputs to the function being tested?
* What is the expected behavior?
* What is the expected output?

### Running tests effectively

> Did you run `npm i` yet?

The prompts are super lightweight because you *need* to be reading the tests. We recommend using `npm run test:w`. This will activate jest's "watch" mode, which automatically re-runs the tests on every file save.

Remember, while in watch mode if you hit `w`, a menu of options opens. These options allow you to focus on only running certain test or certain test files.

For example hitting `p` and then typing `from-scratch` it will only run tests from a file that matches that name. You can hit `a` to go back to running all tests.

Hit `ctrl` and `c` to exit watch mode.

You go this!

## Section 1: Has Many / Belongs To

In this section, you must build 2 classes `ToDoList` and `ToDoItem` in the `0-has-many-belongs-to.js` file. **Your task is to create the basic properties and methods required for the relationship to work**. The tests for these files are in `0-has-many-belongs-to.spec.js`.

But wait, theres more!

**You must add at least 1 instance method and property to each class.** But feel free to add more! 1 each is just what the tests require. Get creative!

* In order to keep the primary tests passing, make sure that your custom properties come *after* the required parameters (if at all).
* Run your tests constantly to make sure you don't accidentally break anything, ok?

To be nice, we've kick started the code a little bit with an ID utils function.

## Section 2: Inheritance & Polymorphism

Inside the `1-inheritance-polymorphism.js` file you'll see 2 classes:

* A `Phone` class
* An `AppleIPhone` class

Your mission is to get all the tests to pass. There are a *lot* of tests and they'll tell you exactly what to build. Here are some tips for reading tests to write code:

* Read the test names! Those say what the test is looking for in plain english.
* What are the function signatures (what arguments do you need and what types of data do they expect)?
* Are the methods pure or do they rely on some internal state? Do they have side effects?
* Does the function console log? Return something? Both? Neither?? WHAT DOES IT DO?!
* Are your methods and properties *spelled* correctly?
* Do any classes inherit from any others?

## Section 3: Factory Functions

Remember this? In the `2-factory-function.js` file, you'll find a `bankAccountFactory` function waiting for you.

This time, you won't be using classes. You'll be going back to day 1 of OOP and building a factory function that uses closure to keep its data private.

Your function should return an object with methods for manipulating that private data.

### "Why can't I see my logs in the test?"

Because we are testing how and when you use `console.log`, we are "mocking it" — we are taking control of it and changing its behavior.

So, `console.log` what you need to in order to pass the test; but if you want to see some extra debugging output, use `console.info` instead since we haven't overwritten that function.

OR! Just use the `playground.js` file to mess around, that will log everything like normal. Run that file with `node playground.js`.

**Now get out there and good luck!**
