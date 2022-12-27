class Pawn extends Piece
{
  constructor(image, name, size, initialCell) {
    super(image, name, size, initialCell)
    this.movedOnce = false
  }

  showPossibleDestinations()
  {
    if(this.actualCell.getAdjoiningCells()['north'] && !this.actualCell.getAdjoiningCells()['north'].isBusy()){
      this.actualCell.getAdjoiningCells()['north'].turnOn()
    }
  }

  // move(cell)
  // {   
  //   super.move()
  //   if (!this.movedOnce) {
  //     this.movedOnce = true
  //   }
  // }
}