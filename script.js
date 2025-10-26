// === SURVIVE THE DEAD: BASE GAME ===

// Game configuration
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#121212",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

let player;
let cursors;

// === Initialize Phaser Game ===
const game = new Phaser.Game(config);

// === Load assets ===
function preload() {
  // Placeholder character sprite
  this.load.image("player", "https://i.imgur.com/6g4bV9k.png");
}

// === Create game objects ===
function create() {
  // Add the player to the scene
  player = this.physics.add.sprite(400, 300, "player");
  player.setScale(0.5);

  // Add text instructions
  this.add.text(10, 10, "Use arrow keys to move", {
    font: "16px Arial",
    fill: "#ffffff",
  });

  // Enable keyboard controls
  cursors = this.input.keyboard.createCursorKeys();
}

// === Game loop ===
function update() {
  const speed = 200;
  player.setVelocity(0);

  // Movement logic
  if (cursors.left.isDown) player.setVelocityX(-speed);
  if (cursors.right.isDown) player.setVelocityX(speed);
  if (cursors.up.isDown) player.setVelocityY(-speed);
  if (cursors.down.isDown) player.setVelocityY(speed);
}
