'use strict';

const { expect } = require('chai');
const LinkedList = require('./linkedlist');
const { isLoop, findLoop } = require('./looper');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const emojis = ['🥚', '🐣', '🦅 ', '👾'];
const same = [1, 1, 1, 1, 1];

// These LLs have loops:
const numberLoop = new LinkedList();
numbers.forEach((val) => numberLoop.addToTail(val));
numberLoop.getNthNode(5).next = numberLoop.getNthNode(1);

const letterLoop = new LinkedList();
letters.forEach((letter) => letterLoop.addToTail(letter));
letterLoop.getNthNode(8).next = letterLoop.getNthNode(2);

const allSameLoop = new LinkedList();
same.forEach((number) => allSameLoop.addToTail(number));
allSameLoop.getNthNode(2).next = allSameLoop.getNthNode(1);

// These LLs do NOT have a loop:
const emojiNoLoop = new LinkedList();
emojis.forEach((el) => emojiNoLoop.addToTail(el));

const allSameNoLoop = new LinkedList();
same.forEach((number) => allSameNoLoop.addToTail(number));

const emptyList = new LinkedList();

const singleNodeList = new LinkedList();
singleNodeList.addToTail(1);

describe('isLoop function', function () {
  it('returns true if linked list contains a loop', function () {
    expect(isLoop(numberLoop)).to.equal(true);
    expect(isLoop(letterLoop)).to.equal(true);
    expect(isLoop(allSameLoop)).to.equal(true);
  });

  it('returns false if linked list contains no loop', function () {
    expect(isLoop(emojiNoLoop)).to.equal(false);
    expect(isLoop(allSameNoLoop)).to.equal(false);
  });

  // Write your own tests below. Include >=1 edge case.
  // Hint: Take a look at the LLs that do not have a loop declared above.
});

// EXTRA CREDIT: Test the findLoop function.
describe('findLoop function', function () {
  xit('returns...', function () {
    // add expect statements here
  });

  // ...
});
