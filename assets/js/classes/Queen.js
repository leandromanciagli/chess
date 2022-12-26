class Queen extends Piece
{
  showPossibleDestinations()
  {
    this.showPossibleDestinationsByDirection(this.actualCell, 'north')
    this.showPossibleDestinationsByDirection(this.actualCell, 'south')
    this.showPossibleDestinationsByDirection(this.actualCell, 'east')
    this.showPossibleDestinationsByDirection(this.actualCell, 'west')
    this.showPossibleDestinationsByDirection(this.actualCell, 'northEast')
    this.showPossibleDestinationsByDirection(this.actualCell, 'northWest')
    this.showPossibleDestinationsByDirection(this.actualCell, 'southEast')
    this.showPossibleDestinationsByDirection(this.actualCell, 'southWest')
  }
}