# OOP Game of life

This repository is a base to practise OOP.

The game of life is played inside a square grid of 20x20 cases.

This game does not interact with a user.

It's a turn based game.

## Rules

We have 3 kinds of fishes, with their own set of rules :

- Sardine: 
  - can move 1 case per turn in a random direction
  - cannot eat Tuna or Shark
  - creates a Sardine behind itself (after last move) every 2 turns
- Tuna:
  - can move 2 cases per turn in a random direction
  - can eat Sardine but not Shark
  - creates a Tuna behind itself (after last move) every 5 turns
  - if Tuna does not eat for 3 turns, it dies.
- Shark:
  - can move 3 cases per turn in a random direction
  - can eat Tuna but not Sardine
  - creates a Shark behind itself (after last move) every 10 turns
  - if Shark does not eat for 5 turns, it dies.

You can initialize the game with as many fishes as you like.

The display can simply be in the console.

## Tools

Jest, Eslint and Prettier are available in this repository.
