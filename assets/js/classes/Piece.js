class Piece
{
    constructor(image, name, size, initialCell)
    {
        this.image = image
        this.name = name
        this.size = size
        this.initialCell = initialCell
        this.actualCell = this.initialCell
    }

    draw() 
    {
        image(this.image, this.actualCell.posX, this.actualCell.posY, this.size, this.size);
    }

    wasSelected(offsetX, offsetY)
    {
        return (offsetX >= this.actualCell.posX && offsetX <= this.actualCell.posX+this.size) && (offsetY >= this.actualCell.posY && offsetY <= this.actualCell.posY+this.size)
    }

    showPossibleDestinationsByDirection(cell, direction)
    {
      if(cell.getAdjoiningCells()[direction] && !cell.getAdjoiningCells()[direction].isBusy){
        cell.getAdjoiningCells()[direction].turnOn()
        this.showPossibleDestinationsByDirection(cell.getAdjoiningCells()[direction], direction)
      }
      return
    }

    move(cell)
    { 
      this.actualCell.isBusy = false
      this.actualCell = cell
      this.actualCell.isBusy = true
    }

    getActualCell()
    {
      return this.actualCell()
    }
}