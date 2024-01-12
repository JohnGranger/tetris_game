export function drawSquare(ctx, x, y, color, squareSize) {
    // 绘制背景
    ctx.fillStyle = color;
    ctx.fillRect(x * squareSize + window.innerWidth / 2.5, y * squareSize, squareSize, squareSize);
    // 绘制边框
    ctx.strokeStyle = "BLACK";
    ctx.strokeRect(x * squareSize + window.innerWidth / 2.5, y * squareSize, squareSize, squareSize);
}