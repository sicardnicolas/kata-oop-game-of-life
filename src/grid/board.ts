import * as console from "console";

const EMPTY_CASE = " . ";
const LINE_DECORATOR =
  "--------------------------------------------------------------";
const COLUMN_DECORATOR = "|";
const BOARD_SIZE = 20;

export class Board {
  private grid: string[][];

  constructor() {
    this.grid = [];

    for (let column = 0; column < BOARD_SIZE; column++) {
      this.grid[column] = [];
      for (let row = 0; row < BOARD_SIZE; row++) {
        this.grid[column][row] = EMPTY_CASE;
      }
    }
  }

  display(): void {
    console.log(LINE_DECORATOR);
    for (let column = 0; column < this.grid.length; column++) {
      let rowAsString = COLUMN_DECORATOR;
      for (let row = 0; row < this.grid[column].length; row++) {
        rowAsString += this.grid[column][row];
      }
      rowAsString += COLUMN_DECORATOR;
      console.log(rowAsString);
    }
    console.log(LINE_DECORATOR);
  }
}
