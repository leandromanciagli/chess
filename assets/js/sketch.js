function setup() {
  const canvasSize = 600
  canvas = createCanvas(canvasSize, canvasSize)
  initialize()
}

function draw() {
  board.draw()
}

function mouseClicked(e) {
  for (const piece in board.pieces) {
    if (board.pieces[piece].wasSelected(e.offsetX, e.offsetY)) {
      board.selectPiece(board.pieces[piece])
    }
  }
  for (const cell in board.cells) {
    if (board.cells[cell].wasSelected(e.offsetX, e.offsetY) && board.selectedPiece && board.cells[cell] != board.selectedPiece.actualCell && board.cells[cell].onFocus) {
      board.selectedPiece.move(board.cells[cell])
      board.selectedPiece = null
      board.turnOffAllCells()
    }
  }
}