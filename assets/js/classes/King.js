class King extends Piece
{
  showPossibleDestinations()
  {
    for (const cell in this.actualCell.adjoiningCells) {
      if (this.actualCell.adjoiningCells[cell] && !this.actualCell.adjoiningCells[cell].isBusy) {
        this.actualCell.adjoiningCells[cell].turnOn()
      }
    }
  }
}