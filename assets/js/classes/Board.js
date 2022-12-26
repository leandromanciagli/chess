class Board
{
  constructor(cells, pieces)
  {
    this.cells = cells
    this.pieces = pieces
    this.selectedPiece = null
  }

  draw()
  {
    for (const cell in this.cells) {
      this.cells[cell].draw()
    }

    for (const piece in this.pieces) {
      this.pieces[piece].draw()
    }
  }

  turnOffAllCells()
  {
    for (const cell in this.cells) {
      this.cells[cell].turnOff()
    }
  }

  selectPiece(piece)
  {
    this.turnOffAllCells()
    this.selectedPiece = piece
    piece.showPossibleDestinations()
  }
}