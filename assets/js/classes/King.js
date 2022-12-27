class King extends Piece
{
  showPossibleDestinations()
  {
    for (const cell in this.actualCell.getAdjoiningCells()) {
      if (this.actualCell.getAdjoiningCells()[cell] && !this.actualCell.getAdjoiningCells()[cell].isBusy()) {
        this.actualCell.getAdjoiningCells()[cell].turnOn()
      }
    }
  }
}