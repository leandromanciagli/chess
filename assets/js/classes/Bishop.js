class Bishop extends Piece
{
  showPossibleDestinations()
  {
    this.showPossibleDestinationsByDirection(this.actualCell, 'northEast')
    this.showPossibleDestinationsByDirection(this.actualCell, 'northWest')
    this.showPossibleDestinationsByDirection(this.actualCell, 'southEast')
    this.showPossibleDestinationsByDirection(this.actualCell, 'southWest')
  }
}