class Tower extends Piece
{
  showPossibleDestinations()
  {
    this.showPossibleDestinationsByDirection(this.actualCell, 'north')
    this.showPossibleDestinationsByDirection(this.actualCell, 'south')
    this.showPossibleDestinationsByDirection(this.actualCell, 'east')
    this.showPossibleDestinationsByDirection(this.actualCell, 'west')
  }
}