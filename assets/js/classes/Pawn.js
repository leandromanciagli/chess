class Pawn extends Piece
{
  constructor(image, name, size, initialCell) {
    super(image, name, size, initialCell)
    this.movedOnce = false
  }

  showPossibleDestinations()
  {
    this.actualCell.turnOn()
    if(this.actualCell.adjoiningCells['north'] && !this.actualCell.adjoiningCells['north'].isBusy){
      console.log(!this.actualCell.adjoiningCells['north'].isBusy);
      this.actualCell.adjoiningCells['north'].turnOn()
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