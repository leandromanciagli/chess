class Piece
{
    constructor(image, name, size, initialCell)
    {
      this.image = image
      this.name = name
      this.size = size
      this.initialCell = initialCell
      this.actualCell = this.initialCell
      this.captured = false
    }

    draw() 
    {
      imageMode(CORNER)
      image(this.image, this.actualCell.posX, this.actualCell.posY, this.size, this.size);
    }

    wasSelected(offsetX, offsetY)
    {
      return (offsetX >= this.actualCell.posX && offsetX <= this.actualCell.posX+this.size) && (offsetY >= this.actualCell.posY && offsetY <= this.actualCell.posY+this.size)
    }

    showPossibleDestinationsByDirection(cell, direction)
    {
      if(cell.getAdjoiningCells()[direction] && !cell.getAdjoiningCells()[direction].isBusy()) {
        cell.getAdjoiningCells()[direction].turnOn()
        this.showPossibleDestinationsByDirection(cell.getAdjoiningCells()[direction], direction)
      } else if(cell.getAdjoiningCells()[direction] && cell.getAdjoiningCells()[direction].isBusy() && cell.getAdjoiningCells()[direction].getActualPiece().getTeam() != this.team) {
        cell.getAdjoiningCells()[direction].turnOn('red')
      }
      return
    }

    move(cell)
    { 
      if (cell.isBusy() && cell.getActualPiece().canBeCaptured()) {
        cell.getActualPiece().setCaptured(true)
      }
      this.actualCell.setActualPiece(null)
      this.actualCell = cell
      this.actualCell.setActualPiece(this)
    }

    getActualCell()
    {
      return this.actualCell
    }

    getTeam()
    {
      return this.team
    }

    canBeCaptured()
    {
      return this.actualCell.isOnFocus() && this.actualCell.selectedColor == 'red'
    }

    getCaptured()
    {
      return this.captured
    }

    setCaptured(captured)
    {
      this.captured = captured
    }
}