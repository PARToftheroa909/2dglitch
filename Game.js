// Import Kaboom library
import kaboom from "kaboom";

// Initialize Kaboom
kaboom();

// Create the player sprite (a red square with size 32x32)
loadSprite("player", {
  width: 32,
  height: 32,
  color: rgb(255, 0, 0), // Red color
});

// Create the player character
const player = add([
  sprite("player"),      // The sprite is a red square
  pos(100, 100),         // Starting position
  body(),                // Add physics for gravity and collision
]);

// Define the ground (a simple solid block at the bottom of the screen)
const ground = add([
  rect(width(), 40),     // A rectangle that spans the width of the screen
  pos(0, height() - 40), // Positioned at the bottom of the screen
  solid(),               // Make it solid so the player can stand on it
  color(0, 0, 255),      // Blue color for the ground
]);

// Movement controls for the player (WASD and arrow keys)
keyDown("left", () => {
  player.move(-200, 0);  // Move the player left (arrow key)
});

keyDown("right", () => {
  player.move(200, 0);   // Move the player right (arrow key)
});

keyDown("a", () => {
  player.move(-200, 0);  // Move the player left (A key)
});

keyDown("d", () =>
