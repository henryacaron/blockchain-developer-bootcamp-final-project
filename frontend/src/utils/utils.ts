export const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
export const VERTICAL_AXIS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const GRID_SIZE = Math.floor(window.innerHeight * 10 / 10);
/********************************Interfaces ***********************************/

export const numRows = 10;
export const numCols = 10;

// Team Enum
// stores good and bad team
export enum TeamType {
  RED,
  BLUE
}

export enum TileType {
  PIECE,
  VALID_MOVE,
  EMPTY,
  VALID_PIECE,
  BLOCKED
}
// PieceType Enum
// stores piece type
export enum Piece {
  NONE,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  BOMB,
  FLAG,
  ENEMY,
  BLOCKED
}

export function c2i ([i,j] : [number, number]) : number{
  return i * numCols + j;
} 

export function i2c (x : number) : [number,number] {
  return [Math.floor(x / numRows), x % numRows];
}

export function piece2Num(piece : Piece) : number {
  switch (piece) {
    case Piece.ONE : return 1
    case Piece.TWO : return 2
    case Piece.THREE : return 3
    case Piece.FOUR : return 4
    case Piece.FIVE : return 5
    case Piece.SIX : return 6
    case Piece.SEVEN : return 7
    case Piece.EIGHT : return 8
    case Piece.NINE : return 9
    case Piece.BOMB : return 10
    case Piece.FLAG : return 11
  }
  return 12;
}

export function piece2Str(piece : Piece | undefined) : string {
  switch (piece) {
    case Piece.ONE : return '1'
    case Piece.TWO : return '2'
    case Piece.THREE : return '3'
    case Piece.FOUR : return '4'
    case Piece.FIVE : return '5'
    case Piece.SIX : return '6'
    case Piece.SEVEN : return '7'
    case Piece.EIGHT : return '8'
    case Piece.NINE : return '9'
    case Piece.BOMB : return 'B'
    case Piece.FLAG : return 'F'
  }
  return 'X';
}

export function num2Piece(num : number) : Piece | undefined {
    console.log(`number received: ${num}, ${typeof(num)}`)
    switch (num) {
      case 1 : return Piece.ONE
      case 2 : return Piece.TWO
      case 3 : return Piece.THREE
      case 4 : return Piece.FOUR
      case 5 : return Piece.FIVE
      case 6 : return Piece.SIX
      case 7 : return Piece.SEVEN
      case 8 : return Piece.EIGHT
      case 9 : return Piece.NINE
      case 10 : return Piece.BOMB
      case 11 : return Piece.FLAG
    }
    return undefined;
}

  
export function inv (num : number) : number {
  return (numCols * numRows) -1 - num;
}
