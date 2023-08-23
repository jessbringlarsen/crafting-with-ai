const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Line length of 50 units
const lineLength = 50;

for (let i = 0; i < 10000; i++) {
  // Pick a random point A
  const startX = Math.random() * canvas.width;
  const startY = Math.random() * canvas.height;

  // Choose a random angle V between 0 and 360 degrees
  const angle = Math.random() * 2 * Math.PI;

  // Calculate the end point of the line based on the angle
  const endX = startX + lineLength * Math.cos(angle);
  const endY = startY + lineLength * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}
