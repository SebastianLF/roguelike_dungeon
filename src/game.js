const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const game = {
  ctx: ctx,
  width: 800,
  height: 500,
  cols: () => this.height / 100,
  rows: () => this.width / 100
};

// canvas dimensions
canvas.height = game.height;
canvas.width = game.width;

export default game;
